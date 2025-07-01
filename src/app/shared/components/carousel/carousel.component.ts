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

        // Calcula el ancho exacto del primer set de iconos
        for (let i = 0; i < originalItemsCount; i++) {
          widthOfOneSet += items[i].offsetWidth;
          if (i < originalItemsCount - 1) {
            widthOfOneSet += 15; // Añade el gap
          }
        }

        console.log('Ancho de un set calculado:', widthOfOneSet);

        // Crea un timeline con `repeat: -1` y un evento `onComplete`
        const tl = gsap.timeline({ repeat: -1, ease: 'none' });

        // Anima la pista la distancia del primer set
        tl.to(carouselTrack, {
          x: -widthOfOneSet,
          duration: 5, // Ajusta la duración para la velocidad
          ease: 'none',
          // Al completarse el movimiento, GSAP reinicia la posición
          // a un valor equivalente a 0 para que el bucle sea perfecto.
          // Como los elementos están duplicados, este "salto" no se nota.
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % widthOfOneSet),
          },
        });
      });
    }
  }
}
