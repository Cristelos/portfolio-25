import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @ViewChild('menuToggle') menuToggle!: ElementRef<HTMLInputElement>;

  closeMenu() {
    if (this.menuToggle?.nativeElement?.checked) {
      this.menuToggle.nativeElement.checked = false;
    }
  }
}
