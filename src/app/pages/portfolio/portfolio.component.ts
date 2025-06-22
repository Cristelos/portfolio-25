import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WaveComponent } from '../../shared/decorations/wave/wave.component';
import { DotsComponent } from '../../shared/decorations/dots/dots.component';
import { projects } from '../../shared/data/projects.data';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, WaveComponent, DotsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioComponent {
  public projectsList: Project[] = projects;
}
