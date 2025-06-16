import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonCustomComponent } from '../button-custom/button-custom.component';

@Component({
  selector: 'app-card',
  imports: [ButtonCustomComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  public image = input<string>('');
  public title = input<string>('');
  public url = input<string>('');
  public date = input<string>('');
  public category = input<string>('');
}
