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
import { CommonModule, isPlatformBrowser } from '@angular/common';
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

  @ViewChildren('progressBarFill') progressFillBars!: QueryList<ElementRef<HTMLDivElement>>;

  // Injectamos esto para que no rompa por terminal
  private zone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  private animated = false;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.zone.runOutsideAngular(() => {
      const observer = new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.animated) {
              this.animated = true;
              this.animateProgressBars();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );

      this.progressFillBars.forEach((bar) => {
        observer.observe(bar.nativeElement);
      });
    });
  }

  private animateProgressBars(): void {
    this.progressFillBars.forEach((barRef, index) => {
      const el = barRef.nativeElement;
      const level = parseInt(el.getAttribute('data-level') || '0', 10);

      if (!el.parentElement || el.parentElement.offsetWidth === 0) {
        console.warn(`Sin ancho para animar: ${this.skillList[index]?.name}`);
        return;
      }

      gsap.set(el, { width: '0%' });

      gsap.to(el, {
        width: `${level}%`,
        duration: 1.5,
        delay: index * 0.15,
        ease: 'power2.out',
      });
    });
  }
}
