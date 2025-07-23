// app-slider.component.ts

import {
  Component,
  ChangeDetectionStrategy,
  input,
  signal,
  WritableSignal,
  inject,
  PLATFORM_ID,
  OnInit,
  DestroyRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Project } from '../../models/project.model';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements OnInit {
  public slides = input<Project[]>([]);
  public slideIndex = signal(0);
  public slidesPerView: WritableSignal<number> = signal(1);

  private platformId = inject(PLATFORM_ID);
  private destroyRef = inject(DestroyRef);
  private resizeObserver: ResizeObserver | undefined;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.slidesPerView.set(this.getSlidesPerViewByWindowWidth());

      // LOG para depuración en ngOnInit
      console.log('OnInit - slides.length:', this.slides().length);
      console.log('OnInit - slidesPerView:', this.slidesPerView());
      console.log('OnInit - Num Indicadores:', Math.ceil(this.slides().length / this.slidesPerView()));

      this.resizeObserver = new ResizeObserver(() => {
        this.handleResize();
      });
      this.resizeObserver.observe(document.body);

      this.destroyRef.onDestroy(() => {
        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
        }
      });
    }
  }

  private handleResize(): void {
    const prevSlidesPerView = this.slidesPerView();
    const newSlidesPerView = this.getSlidesPerViewByWindowWidth();

    if (prevSlidesPerView !== newSlidesPerView) {
      this.slidesPerView.set(newSlidesPerView);

       // LOG para depuración en handleResize
      console.log('handleResize - newSlidesPerView:', newSlidesPerView);
      console.log('handleResize - slides.length:', this.slides().length);
      console.log('handleResize - Num Indicadores (después de resize):', Math.ceil(this.slides().length / newSlidesPerView));

      const total = this.slides().length;
      const maxIndex = Math.max(0, total - newSlidesPerView);
      if (this.slideIndex() > maxIndex) {
        this.slideIndex.set(maxIndex);
      }
    }
  }

  private getSlidesPerViewByWindowWidth(): number {
    const width = window.innerWidth;

     console.log('getSlidesPerViewByWindowWidth - window.innerWidth:', width);
    if (width >= 1280) return 4;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  public getVisibleSlides(): Project[] {
    const total = this.slides().length;
    const perView = this.slidesPerView();
    const startIndex = this.slideIndex();

    if (total === 0 || perView === 0) {
      return [];
    }

    const endIndex = Math.min(startIndex + perView, total);
    return this.slides().slice(startIndex, endIndex);
  }

  changeSlide(direction: number): void {
    const total = this.slides().length;
    const perView = this.slidesPerView();
    if (total === 0) return;

    let newIndex = this.slideIndex() + direction * perView;

    const maxIndex = Math.max(0, total - perView);
    if (newIndex < 0) {
      newIndex = maxIndex;
    } else if (newIndex > maxIndex) {
      newIndex = 0;
    }

    this.slideIndex.set(newIndex);
  }

  goToSlide(groupIndex: number): void {
    const perView = this.slidesPerView();
    const total = this.slides().length;
    const maxIndex = Math.max(0, total - perView);

    let newIndex = groupIndex * perView;
    this.slideIndex.set(Math.min(newIndex, maxIndex));
  }

  getIndicatorSlides(): any[] {
    const total = this.slides().length;
    const perView = this.slidesPerView();

    // LOG para depuración en getIndicatorSlides
    console.log('getIndicatorSlides - total slides:', total);
    console.log('getIndicatorSlides - slides per view:', perView);
    const numIndicators = Math.ceil(total / perView);
    console.log('getIndicatorSlides - calculated indicators:', numIndicators);

    if (total === 0 || perView === 0) return [];
    return new Array(Math.ceil(total / perView));
  }

  getCurrentGroupIndex(): number {
    const perView = this.slidesPerView();
    if (perView === 0) return 0;
    return Math.floor(this.slideIndex() / perView);
  }

  isAtStart(): boolean {
    return this.slideIndex() === 0;
  }

  isAtEnd(): boolean {
    const total = this.slides().length;
    const perView = this.slidesPerView();
    return this.slideIndex() + perView >= total;
  }
}
