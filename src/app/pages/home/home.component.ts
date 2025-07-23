import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  NgZone,
  OnInit,
  PLATFORM_ID,
  QueryList,
  ViewChild,
} from '@angular/core';
import { ButtonCustomComponent } from '../../shared/components/button-custom/button-custom.component';
import { DotsComponent } from '../../shared/decorations/dots/dots.component';
import { WaveComponent } from '../../shared/decorations/wave/wave.component';
import { SliderComponent } from '../../shared/components/slider/slider.component';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';

import { Project } from '../../shared/models/project.model';
import { projects } from '../../shared/data/projects.data';

import { MatIconModule } from '@angular/material/icon';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonCustomComponent,
    DotsComponent,
    WaveComponent,
    MatIconModule,
    SliderComponent,
    CarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements AfterViewInit, OnInit {
  // Metadatos
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Frontend developer');
    this.meta.updateTag({
      name: 'description',
      content:
        'Este apartado encontrarás información sobre mí, mis habilidades y mi experiencia laboral',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Frontend developer' });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'experiencia laboral, cv,habilidades,skills,angular, html,css,patricia fernández,typescript',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://res.cloudinary.com/dgguxcib9/image/upload/v1751824219/portfolio/logo-web_hthtfp.png',
    });
  }

  // Animation elements
  // Hero Section
  @ViewChild('principalTitle') principalTitle!: ElementRef<HTMLInputElement>;
  @ViewChild('secondaryTitle') secondaryTitle!: ElementRef<HTMLInputElement>;
  @ViewChild('arrowDown') arrowDown!: ElementRef<HTMLInputElement>;

  // About Section
  @ViewChild('about') about!: ElementRef<HTMLDivElement>;

  // Projects Section
  @ViewChild('projects') projects!: ElementRef<HTMLInputElement>;

  // Contact Section
  @ViewChild('contact') contact!: ElementRef<HTMLInputElement>;

  // Injectamos esto para que no rompa por terminal
  private zone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  public featuredProjects: Project[] = this.getRandomProjects(projects.length);

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    if (!isPlatformBrowser(this.platformId)) return;

    this.zone.runOutsideAngular(() => {
      this.animateTitles();
      this.animateArrow();
      this.animateAbout();
      this.animateProject();
      this.animateContact();
    });
  }

  //Animate logic
  private animateTitles(): void {
    const principalTitleAnimation = this.principalTitle.nativeElement;
    const secondaryTitleAnimation = this.secondaryTitle.nativeElement;

    let splitPrincipalTitle = SplitText.create(principalTitleAnimation, {
      type: 'chars',
    });
    let splitSecondaryTitle = SplitText.create(secondaryTitleAnimation, {
      type: 'words,chars',
    });

    let tl = gsap.timeline();
    let secondary = splitSecondaryTitle.chars;

    splitPrincipalTitle.chars.forEach((char) => {
      gsap.from(char, {
        scale: () => gsap.utils.random(0, 10),
        y: () => gsap.utils.random(-100, 150),
        x: () => gsap.utils.random(-300, 350),
        rotate: () => gsap.utils.random(0, 360),
        autoAlpha: 0.05,
        stagger: 0.05,
        ease: 'power4.out',
        duration: 1.8,
      });
    });

    tl.from(
      secondary,
      {
        duration: 1,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: '0% 50% -50',
        ease: 'back',
        stagger: 0.01,
      },
      0.5,
    );
  }

  private animateArrow(): void {
    const arrowDownAnimation = this.arrowDown.nativeElement;

    gsap.from(arrowDownAnimation, {
      y: -80,
      duration: 2,
      ease: 'bounce',
      repeat: 1,
    });
  }

  private animateAbout(): void {
    const element = this.about.nativeElement;

    gsap.from(element, {
      opacity: 0,
      y: -150,
      duration: 3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 60%',
        end: 'bottom',
        scrub: 1,
      },
    });
  }

  private animateProject(): void {
    const element = this.projects.nativeElement;

    gsap.from(element, {
      opacity: 0,
      y: -150,
      duration: 3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 60%',
        end: 'bottom',
        scrub: 1,
      },
    });
  }

  private animateContact(): void {
    const element = this.contact.nativeElement;

    gsap.from(element, {
      opacity: 0,
      y: -150,
      duration: 3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom',
        scrub: 1,
      },
    });
  }

  private getRandomProjects(count: number): Project[] {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
