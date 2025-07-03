import {
  Component,
  ChangeDetectionStrategy,
  input,
  signal,
  WritableSignal,
  ViewChild,
  ElementRef,
  inject,
  effect,
  PLATFORM_ID,
  AfterViewInit,
  NgZone,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { gsap } from 'gsap';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, CardComponent, MatIconModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements AfterViewInit {
  public slides = input<Project[]>([]);
  public slideIndex = signal(0);
  public slidesPerView: WritableSignal<number> = signal(1);

  @ViewChild('sliderTrack', { static: false })
  sliderTrack!: ElementRef<HTMLDivElement>;

  // Injectamos esto para que no rompa por terminal
  private zone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.slidesPerView.set(this.getSlidesPerView());

      effect(() => {
        const update = () => {
          this.slidesPerView.set(this.getSlidesPerView());
          this.animateSlide(); // Realinea tras resize
        };
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
      });
    }
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.animateSlide();
      }, 50); // Pequeño retardo
    });
  }

  private getSlidesPerView(): number {
    if (!isPlatformBrowser(this.platformId)) return 1;
    const width = window.innerWidth;
    if (width >= 1280) return 4;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  changeSlide(direction: number) {
    const total = this.slides().length;
    const perView = this.slidesPerView();
    let newIndex = this.slideIndex() + direction * perView;

    if (newIndex < 0) {
      newIndex = total - perView;
    } else if (newIndex + perView > total) {
      newIndex = 0;
    }

    this.slideIndex.set(newIndex);
    this.animateSlide();
  }

  animateSlide() {
    if (!this.sliderTrack || !this.slides().length) return;

    const trackEl = this.sliderTrack.nativeElement;
    const slideEl = trackEl.querySelector('.slide') as HTMLElement;

    if (!slideEl) {
      console.warn('No se encontró ningún elemento con clase .slide');
      return;
    }

    const slideWidth = slideEl.offsetWidth;
    const offset = -(this.slideIndex() * slideWidth);

    gsap.to(trackEl, {
      x: offset,
      duration: 2.5,
      ease: 'power1.out', // más suave que power2
    });
  }

  getIndicatorSlides(): any[] {
    const total = this.slides().length;
    const perView = this.slidesPerView();
    return new Array(Math.ceil(total / perView));
  }

  goToSlide(groupIndex: number) {
    const perView = this.slidesPerView();
    const index = groupIndex * perView;
    this.slideIndex.set(Math.min(index, this.slides().length - perView));
    this.animateSlide();
  }

  getCurrentGroupIndex(): number {
    return Math.floor(this.slideIndex() / this.slidesPerView());
  }
}
