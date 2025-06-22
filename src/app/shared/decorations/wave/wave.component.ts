import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-wave',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaveComponent {
  public colorPink = input<boolean>(true);
  public colorBlue = input<boolean>(false);
  public colorGreen = input<boolean>(false);
  public colorLight = input<boolean>(false);

  public fillColor = computed(() =>
  this.colorPink() ? 'var(--color-pink)' :
  this.colorBlue() ? 'var(--color-blue)' :
  this.colorGreen() ? 'var(--color-green)' :
  this.colorLight() ? 'var(--color-light)' :
  'currentColor'
);
}
