import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  effect,
  inject,
  computed,
  WritableSignal,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, CardComponent, MatIconModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
  public slides = input<Project[]>([]);
  public slideIndex = signal(0);

  // Signal reactiva para el número de slides por vista
  public slidesPerView: WritableSignal<number> = signal(this.getSlidesPerView());

  constructor() {
    // Efecto que escucha cambios en el tamaño de pantalla
    effect(() => {
      const update = () => {
        this.slidesPerView.set(this.getSlidesPerView());
      };

      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    });
  }

  private getSlidesPerView(): number {
    const width = window.innerWidth;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  getVisibleSlides(): Project[] {
    const all = this.slides();
    const start = this.slideIndex();
    const end = start + this.slidesPerView();
    return all.slice(start, end);
  }

  getIndicatorSlides(): any[] {
    const total = this.slides().length;
    const perView = this.slidesPerView();
    return new Array(Math.ceil(total / perView));
  }

  changeSlide(n: number) {
    const total = this.slides().length;
    const perView = this.slidesPerView();
    let newIndex = this.slideIndex() + n * perView;

    if (newIndex < 0) {
      newIndex = total - (total % perView || perView);
    } else if (newIndex >= total) {
      newIndex = 0;
    }

    this.slideIndex.set(newIndex);
  }

  goToSlide(groupIndex: number) {
    const perView = this.slidesPerView();
    const index = groupIndex * perView;
    this.slideIndex.set(
      Math.min(index, this.slides().length - perView)
    );
  }

  getCurrentGroupIndex(): number {
    return Math.floor(this.slideIndex() / this.slidesPerView());
  }
}
