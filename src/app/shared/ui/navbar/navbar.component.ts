import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  NgZone,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('menuToggle') menuToggle!: ElementRef<HTMLInputElement>;

  // Animation elements
  @ViewChild('name') name!: ElementRef<HTMLInputElement>;
  @ViewChild('title') title!: ElementRef<HTMLInputElement>;
  @ViewChild('desktopMenu') desktopMenu!: ElementRef<HTMLInputElement>;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef<HTMLInputElement>;

  // Injectamos esto para que no rompa por terminal
  private zone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.zone.runOutsideAngular(() => {
      this.animateNavbar();
    });
  }

  //Animate logic
  private animateNavbar(): void {
    const nameAnimation = this.name.nativeElement;
    const titleAnimation = this.title.nativeElement;
    const desktopMenuAnimation = this.desktopMenu.nativeElement;

    gsap.from(nameAnimation, {
      x: -100,
      duration: 1.5,
      ease: 'power4.out'
    });

    gsap.from(titleAnimation, {
      y: -100,
      duration: 1.5,
      ease: 'power4.out'
    });

    gsap.from(desktopMenuAnimation, {
      y: 100,
      duration: 1.5,
      ease: 'power4.out'
    });
  }

  closeMenu() {
    if (this.menuToggle?.nativeElement?.checked) {
      this.menuToggle.nativeElement.checked = false;
    }
  }
}
