import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  signal,
  inject,
  NgZone,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { gsap } from 'gsap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  skills = signal([
    { name: 'HTML5', icon: 'assets/icons/html5.svg' },
    { name: 'CSS3', icon: 'assets/icons/css.svg' },
    { name: 'Sass', icon: 'assets/icons/sass.svg' },
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { name: 'Typescript', icon: 'assets/icons/typescript.svg' },
    { name: 'RxJS', icon: 'assets/icons/reactivex.svg' },
    { name: 'Figma', icon: 'assets/icons/figma.svg' },
    { name: 'Git', icon: 'assets/icons/git.svg' },
    { name: 'Github', icon: 'assets/icons/github.svg' },
    { name: 'Terminal', icon: 'assets/icons/gnometerminal.svg' },
  ]);

  private zone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        const carouselTrack = this.carousel.nativeElement;
        const items = Array.from(carouselTrack.children) as HTMLElement[];

        if (items.length === 0) {
          console.warn('No hay elementos en el carrusel para animar.');
          return;
        }

        const originalItemsCount = this.skills().length;
        let widthOfOneSet = 0;
        for (let i = 0; i < originalItemsCount; i++) {
          widthOfOneSet += items[i].offsetWidth;
          if (i < originalItemsCount - 1) {
            widthOfOneSet += 15;
          }
        }

        const tl = gsap.timeline({ repeat: -1, ease: 'none' });

        tl.to(carouselTrack, {
          x: -widthOfOneSet,
          duration: 5,
          ease: 'none',
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % widthOfOneSet),
          },
        });
      });
    }
  }
}
