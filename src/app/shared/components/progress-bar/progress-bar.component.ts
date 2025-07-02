import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  NgZone,
  PLATFORM_ID,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';
import { Skills } from '../../models/skill.model';
import { skills } from '../../data/skills.data';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent implements AfterViewInit {
  public skillList: Skills[] = skills;

  @ViewChildren('progressBarFill') progressFillBars!: QueryList<
    ElementRef<HTMLDivElement>
  >;

  private zone = inject(NgZone); // Inyecta NgZone
  private platformId = inject(PLATFORM_ID); // Inyecta PLATFORM_ID

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.progressFillBars.length > 0) {
            this.animatedProgressBar();
          } else {
            console.warn(
              'No se encontraron las barras de progreso después del timeout en ngAfterViewInit.',
            );
          }
        }, 50);
      });
    }
  }

  animatedProgressBar(): void {
    this.progressFillBars.forEach((barRef, index) => {
      const fillEl = barRef.nativeElement;
      const level = parseInt(fillEl.getAttribute('data-level') || '0', 10);

      if (!fillEl.parentElement || fillEl.parentElement.offsetWidth === 0) {
        console.warn(
          `El elemento padre de la barra de progreso para la habilidad ${this.skillList[index]?.name} no tiene ancho. Se omite la animación.`,
        );
        return;
      }

      gsap.set(fillEl, { width: '0%' });

      gsap.to(fillEl, {
        width: `${level}%`,
        duration: 1.5,
        delay: index * 0.15,
        ease: 'power2.out',
      });
    });
  }
}
