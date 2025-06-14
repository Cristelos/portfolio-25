import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dots.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotsComponent { }
