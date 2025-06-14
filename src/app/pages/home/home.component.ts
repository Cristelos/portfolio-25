import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonCustomComponent } from '../../shared/components/button-custom/button-custom.component';
import { DotsComponent } from '../../shared/decorations/dots/dots.component';
import { WaveComponent } from '../../shared/decorations/wave/wave.component';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonCustomComponent,
    DotsComponent,
    WaveComponent,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
