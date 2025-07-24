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
    this.title.setTitle('Patricia Fernández – Frontend Developer Angular');

    this.meta.updateTag({
      name: 'description',
      content:
        'Desarrolladora frontend especializada en Angular. Diseño y desarrollo de interfaces modernas, accesibles y funcionales.',
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'desarrolladora frontend, Angular, TypeScript, diseño web, desarrollo web, UI, UX, HTML, CSS, Patricia Fernández',
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Patricia Fernández – Frontend Developer Angular',
    });

    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://res.cloudinary.com/dgguxcib9/image/upload/v1751824219/portfolio/logo-web_hthtfp.png',
    });
  }

  // Animation elements:

  // Preloader
  @ViewChild('preloader') preloaderRef!: ElementRef<HTMLDivElement>;
  @ViewChild('preloaderText') preloaderTextRef!: ElementRef<HTMLDivElement>;

  @ViewChild('pink') pink!: ElementRef<HTMLDivElement>;
  @ViewChild('blue') blue!: ElementRef<HTMLDivElement>;
  @ViewChild('green') green!: ElementRef<HTMLDivElement>;

  @ViewChild('mainContent') mainContent!: ElementRef<HTMLDivElement>;

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
      gsap.set(this.mainContent.nativeElement, { autoAlpha: 0 });

      // Home load animation
      this.animatePageLoadSequence();

      // Animations on the other page section
      this.animateAbout();
      this.animateProject();
      this.animateContact();
    });
  }

  //Animate logic
  private animatePageLoadSequence(): void {
    const preloader = this.preloaderRef.nativeElement;
    const preloaderText = this.preloaderTextRef.nativeElement;
    const mainContentElement = this.mainContent.nativeElement;

    const pinkElement = this.pink.nativeElement;
    const blueElement = this.blue.nativeElement;
    const greenElement = this.green.nativeElement;

    if (
      !preloader ||
      !preloaderText ||
      !mainContentElement ||
      !pinkElement ||
      !blueElement ||
      !greenElement
    ) {
      console.warn(
        'Alguno de los elementos de preloader o contenido principal no se encontró. Asegúrate de que todos los @ViewChilds estén disponibles.',
      );
      if (preloader) preloader.remove();
      gsap.set(mainContentElement, { autoAlpha: 1 });
      document.body.classList.remove('loading');
      return;
    }

    const preloaderTextElements = preloaderText.querySelectorAll('h2');

    const masterTl = gsap.timeline({
      onComplete: () => {
        preloader.remove();
        document.body.classList.remove('loading');
      },
    });

    gsap.set([pinkElement, blueElement, greenElement], { yPercent: 100 });

    if (preloaderText) {
      masterTl.fromTo(
        preloaderTextElements,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
      );

      masterTl.to(
        preloaderTextElements,
        {
          opacity: 0,
          scale: 1.2,
          duration: 0.8,
          ease: 'power2.in',
        },
        '+=0.5',
      );
    }

    masterTl.to(
      pinkElement,
      {
        yPercent: 0,
        duration: 0.7,
        ease: 'power2.out',
      },
      '<0.2',
    );

    masterTl.to(
      blueElement,
      {
        yPercent: 0,
        duration: 0.9,
        ease: 'power2.out',
      },
      '<0.1',
    );

    masterTl.to(
      greenElement,
      {
        yPercent: 0,
        duration: 1.1,
        ease: 'power2.out',
      },
      '<0.1',
    );

    masterTl.to(
      preloader,
      {
        y: '-100%',
        duration: 0.9,
        ease: 'power4.inOut',
      },
      '<0.3',
    );

    masterTl.to(
      mainContentElement,
      {
        autoAlpha: 1,
        duration: 0.2,
        ease: 'power4.out',
      },
      '<0.5',
    );

    masterTl.add(this.animateTitles(), '-=0.6');
    masterTl.add(this.animateArrow(), '-=0.5');
  }

  private animateTitles(): gsap.core.Timeline {
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

    tl.from(splitPrincipalTitle.chars, {
      scale: () => gsap.utils.random(0, 20),
      y: () => gsap.utils.random(-100, 150),
      x: () => gsap.utils.random(-300, 350),
      rotate: () => gsap.utils.random(0, 360),
      ease: 'power4.out',
      duration: 1.8,
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
        delay: 0.5,
      },
      0.5,
    );
    return tl;
  }

  private animateArrow(): gsap.core.Timeline {
    const arrowDownAnimation = this.arrowDown.nativeElement;

    let tl = gsap.timeline();

    tl.from(arrowDownAnimation, {
      y: -80,
      duration: 2,
      ease: 'bounce',
      repeat: 1,
    });
    return tl;
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
