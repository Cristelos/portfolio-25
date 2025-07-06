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
  ViewChild,
} from '@angular/core';
import { DotsComponent } from '../../shared/decorations/dots/dots.component';
import { WaveComponent } from '../../shared/decorations/wave/wave.component';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, DotsComponent, WaveComponent, ProgressBarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutComponent implements AfterViewInit, OnInit {
  // Metadatos
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About me');
    this.meta.updateTag({
      name: 'description',
      content:
        'Información sobre mí, mis habilidades y mi experiencia laboral',
    });
    this.meta.updateTag({ name: 'og:title', content: 'About me' });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'experiencia laboral, cv,habilidades,skills,angular, html,css,patricia fernández,typescript',
    });
  }

  // Animation elements
  @ViewChild('header') header!: ElementRef<HTMLInputElement>;
  @ViewChild('skills') skills!: ElementRef<HTMLInputElement>;
  @ViewChild('experience') experience!: ElementRef<HTMLInputElement>;

  // Injectamos esto para que no rompa por terminal
  private zone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    if (!isPlatformBrowser(this.platformId)) return;

    this.zone.runOutsideAngular(() => {
      this.animateHeader();
      this.animateSkills();
      this.animateExperiencie();
    });
  }

  // Animate logic
  private animateHeader(): void {
    const element = this.header.nativeElement;

    gsap.from(element, {
      opacity: 0,
      y: -150,
      duration: 3,
      ease: 'power2.out',
    });
  }

  private animateSkills(): void {
    const element = this.skills.nativeElement;

    gsap.from(element, {
      opacity: 0,
      y: -150,
      duration: 2,
      ease: 'power2.out',
    });
  }

  private animateExperiencie(): void {
    const element = this.experience.nativeElement;

    gsap.from(element, {
      opacity: 2,
      y: -50,
      duration: 3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 98%',
        scrub: 1,
      },
    });
  }
}
