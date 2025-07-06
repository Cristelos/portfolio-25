import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  NgZone,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { ButtonCustomComponent } from '../../shared/components/button-custom/button-custom.component';
import { DotsComponent } from '../../shared/decorations/dots/dots.component';
import { WaveComponent } from '../../shared/decorations/wave/wave.component';
import { MatIconModule } from '@angular/material/icon';

import { gsap } from 'gsap';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ButtonCustomComponent,
    DotsComponent,
    WaveComponent,
    MatIconModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactComponent implements AfterViewInit {
    // Metadatos
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact');
    this.meta.updateTag({
      name: 'description',
      content:
        'Contacta conmigo',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Contact' });
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
  @ViewChild('header') header!: ElementRef<HTMLInputElement>;

  // Injectamos esto para que no rompa por terminal
  private zone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.zone.runOutsideAngular(() => {
      this.animateHeader();
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
}
