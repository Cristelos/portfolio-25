import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonCustomComponent } from '../button-custom/button-custom.component';
import { BadgeComponent } from "../badge/badge.component";
import { Category } from '../../models/project.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonCustomComponent, BadgeComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  public image = input<string>('');
  public title = input<string>('');
  public url = input<string>('');
  public date = input<string>('');
  public category = input<Category[]>();
  public description = input<string>('');
}
