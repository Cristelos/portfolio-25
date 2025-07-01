import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonCustomComponent } from '../../shared/components/button-custom/button-custom.component';
import { DotsComponent } from '../../shared/decorations/dots/dots.component';
import { WaveComponent } from '../../shared/decorations/wave/wave.component';
import { SliderComponent } from '../../shared/components/slider/slider.component';
import { Project } from '../../shared/models/project.model';
import { projects } from '../../shared/data/projects.data';

import { MatIconModule } from '@angular/material/icon';

import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
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
export default class HomeComponent {
  public featuredProjects: Project[] = this.getRandomProjects(projects.length);

  private getRandomProjects(count: number): Project[] {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
