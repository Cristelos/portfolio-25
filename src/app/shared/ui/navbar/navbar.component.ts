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
import { SplitText } from 'gsap/SplitText';

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
    gsap.registerPlugin(SplitText);

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
    const mobileMenuAnimation = this.mobileMenu.nativeElement;

    let splitName = SplitText.create(nameAnimation, { type: 'chars' });
    let splitTitle = SplitText.create(titleAnimation, { type: 'chars' });
    let splitDesktopMenu = SplitText.create(desktopMenuAnimation, {
      type: 'chars',
    });
    let tl = gsap.timeline();

    gsap.from(nameAnimation, {
      color: 'text-green',
      x: -100,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 1.5,
      ease: 'power4.out'
    });

    gsap.from(titleAnimation, {
      y: -100,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 1.5,
      ease: 'power4.out'
    });

    gsap.from(desktopMenuAnimation, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
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
