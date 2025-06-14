import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wave',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaveComponent { }
