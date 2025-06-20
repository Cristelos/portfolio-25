import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DotsComponent } from '../../shared/decorations/dots/dots.component';
import { WaveComponent } from '../../shared/decorations/wave/wave.component';
import { Skills } from '../../shared/models/skill.model';
import { skills } from '../../shared/data/skills.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, DotsComponent, WaveComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutComponent {
  public skillList: Skills[] = skills;
}
