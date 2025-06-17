import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonCustomComponent } from '../../shared/components/button-custom/button-custom.component';
import { DotsComponent } from '../../shared/decorations/dots/dots.component';
import { WaveComponent } from '../../shared/decorations/wave/wave.component';
import { CardComponent } from '../../shared/components/card/card.component';

import { MatIconModule } from '@angular/material/icon';

import { Skills } from '../../shared/models/skill.model';
import { Project } from '../../shared/models/project.model';
import { projects } from '../../shared/data/projects.data';
import { SliderComponent } from "../../shared/components/slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonCustomComponent,
    DotsComponent,
    WaveComponent,
    MatIconModule,
    SliderComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  public skills: Skills[] = [
    { name: 'HTML5', icon: 'assets/icons/html5.svg' },
    { name: 'CSS3', icon: 'assets/icons/css.svg' },
    { name: 'Sass', icon: 'assets/icons/sass.svg' },
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { name: 'Typescript', icon: 'assets/icons/typescript.svg' },
    { name: 'RxJS', icon: 'assets/icons/reactivex.svg' },
    { name: 'Figma', icon: 'assets/icons/figma.svg' },
    { name: 'Git', icon: 'assets/icons/git.svg' },
    { name: 'Github', icon: 'assets/icons/github.svg' },
    { name: 'Terminal', icon: 'assets/icons/gnometerminal.svg' },
  ];

  public featuredProjects: Project[] = projects;

  private getRandomProjects(count: number): Project[] {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
