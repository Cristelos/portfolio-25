import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-dots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dots.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotsComponent {
  public colorPink = input<boolean>(true);
  public colorBlue = input<boolean>(false);
  public colorGreen = input<boolean>(false);
  public colorLight = input<boolean>(false);

  public fillColorClass = computed(() => {
    if (this.colorPink()) return 'text-pink';
    if (this.colorBlue()) return 'text-blue';
    if (this.colorGreen()) return 'text-green';
    if (this.colorLight()) return 'text-light';
    return 'text-white'; // color por defecto si no se indica ninguno
  });
}
