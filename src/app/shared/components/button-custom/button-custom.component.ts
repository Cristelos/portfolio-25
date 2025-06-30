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

  public buttonClasses(): string[] {
    return [
      this.primaryPink()
        ? 'bg-pink text-blue hover:bg-green cursor-pointer'
        : '',
      this.secondaryPink()
        ? 'border border-pink text-pink hover:border-green hover:text-green cursor-pointer'
        : '',
      this.primaryBlue()
        ? 'bg-blue text-white hover:bg-pink cursor-pointer'
        : '',
      this.secondaryBlue()
        ? 'border border-blue text-blue hover:border-pink hover:text-pink cursor-pointer'
        : '',
      this.primaryGreen()
        ? 'bg-green text-light hover:bg-pink cursor-pointer'
        : '',
      this.secondaryGreen()
        ? 'border border-green text-green hover:border-pink hover:text-pink cursor-pointer'
        : '',
      this.disabled()
        ? 'opacity-50 cursor-not-allowed pointer-events-none'
        : '',
    ];
  }
}
