import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-custom',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './button-custom.component.html',
  styleUrl: './button-custom.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCustomComponent {
  // Buttons types
  public primary = input<boolean>(false);
  public secondary = input<boolean>(false);

  // someConfigurations
  public disabled = input<boolean>(false);
  public routerLink = input<string>('');
  public buttonText = input<string>('');
}
