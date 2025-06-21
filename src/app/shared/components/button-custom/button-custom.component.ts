import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-custom',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './button-custom.component.html',
  styleUrl: './button-custom.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCustomComponent {
  // Buttons types
  public primaryPink = input<boolean>(false);
  public secondaryPink = input<boolean>(false);

  public primaryBlue = input<boolean>(false);
  public secondaryBlue = input<boolean>(false);

  public primaryGreen = input<boolean>(false);
  public secondaryGreen = input<boolean>(false);

  public icons = input<string>('');

  // someConfigurations
  public disabled = input<boolean>(false);
  public routerLink = input<string>('');
  public buttonText = input<string>('');
  public srcLink = input<string>('');
}
