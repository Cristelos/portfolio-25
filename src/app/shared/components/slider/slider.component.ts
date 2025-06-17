import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Project } from '../../models/project.model';

import { MatIconModule } from '@angular/material/icon';

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
  public slideIndex = 0;
  private readonly SLIDES_PER_VIEW = 3;

  getVisibleSlides(): Project[] {
    const allSlides = this.slides();
    if (!allSlides.length) {
      return [];
    }

    const start = this.slideIndex;
    const end = start + this.SLIDES_PER_VIEW;

    let visible = allSlides.slice(start, end);

    return visible;
  }

  getIndicatorSlides(): any[] {
    const allSlides = this.slides();
    if (!allSlides.length) {
      return [];
    }

    const numberOfGroups = Math.ceil(allSlides.length / this.SLIDES_PER_VIEW);
    return new Array(numberOfGroups);
  }

  changeSlide(n: number) {
    const allSlides = this.slides();
    if (!allSlides.length) return;

    const totalGroups = Math.ceil(allSlides.length / this.SLIDES_PER_VIEW);

    this.slideIndex =
      (this.slideIndex + n * this.SLIDES_PER_VIEW + allSlides.length) %
      allSlides.length;

    if (this.slideIndex < 0) {
      this.slideIndex =
        allSlides.length -
        (allSlides.length % this.SLIDES_PER_VIEW || this.SLIDES_PER_VIEW);
    } else if (this.slideIndex >= allSlides.length) {
      this.slideIndex = 0;
    }
  }

  goToSlide(groupIndex: number) {
    const allSlides = this.slides();
    if (!allSlides.length) return;

    this.slideIndex = groupIndex * this.SLIDES_PER_VIEW;

    if (this.slideIndex >= allSlides.length) {
      this.slideIndex =
        allSlides.length -
        (allSlides.length % this.SLIDES_PER_VIEW || this.SLIDES_PER_VIEW);
    }
  }

  getCurrentGroupIndex(): number {
    if (!this.slides().length) {
      return 0; // O manejar según necesites si no hay slides
    }
    return Math.floor(this.slideIndex / this.SLIDES_PER_VIEW);
  }
}
