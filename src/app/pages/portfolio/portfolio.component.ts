import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  computed,
  ViewChild,
  ElementRef,
  NgZone,
  PLATFORM_ID,
  AfterViewInit,
  OnInit,
} from '@angular/core'; // Importar 'computed'
import { WaveComponent } from '../../shared/decorations/wave/wave.component';
import { DotsComponent } from '../../shared/decorations/dots/dots.component';
import { projects } from '../../shared/data/projects.data';
import { Project, Category } from '../../shared/models/project.model'; // Importar Category
import { ButtonCustomComponent } from '../../shared/components/button-custom/button-custom.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { DetailModalComponent } from '../../shared/components/detail-modal/detail-modal.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { gsap } from 'gsap';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    WaveComponent,
    DotsComponent,
    ButtonCustomComponent,
    BadgeComponent,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioComponent implements AfterViewInit, OnInit {
  // Metadatos
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Portfolio');
    this.meta.updateTag({
      name: 'description',
      content: 'Mis projectos',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Portfolio' });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'experiencia laboral, cv,habilidades,skills,angular, html,css,patricia fernández,typescript',
    });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://res.cloudinary.com/dgguxcib9/image/upload/v1751824219/portfolio/logo-web_hthtfp.png',
    });
  }

  // Animation elements
  @ViewChild('header') header!: ElementRef<HTMLInputElement>;
  @ViewChild('filter') filter!: ElementRef<HTMLInputElement>;
  @ViewChild('projects') projects!: ElementRef<HTMLInputElement>;

  // Injectamos esto para que no rompa por terminal
  private zone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  readonly dialog = inject(MatDialog);
  public allProjects = signal<Project[]>(projects);
  public selectedCategory = signal<string | null>(null);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.zone.runOutsideAngular(() => {
      this.animateHeader();
      this.animateFilter();
      this.animateProjects();
    });
  }

  // Unique categories
  public uniqueCategories = computed(() => {
    const categoriesSet = new Set<string>();
    const uniqueCategoriesArray: Category[] = [];

    this.allProjects().forEach((project) => {
      if (project.category) {
        project.category.forEach((cat) => {
          if (!categoriesSet.has(cat.name)) {
            categoriesSet.add(cat.name);
            uniqueCategoriesArray.push(cat);
          }
        });
      }
    });
    return uniqueCategoriesArray;
  });

  // Filtered projects
  public filteredProjects = computed(() => {
    const categoryId = this.selectedCategory();
    const all = this.allProjects();

    if (categoryId) {
      return all.filter(
        (project) =>
          project.category &&
          project.category.some((cat) => cat.id === categoryId),
      );
    } else {
      return all;
    }
  });

  selectCategory(categoryId: string | null): void {
    this.selectedCategory.set(categoryId);
  }

  isCategoryActive(categoryId: string | null): boolean {
    return this.selectedCategory() === categoryId;
  }

  // Dialog logic
  openDialog(project: Project): void {
    const dialogRef = this.dialog.open(DetailModalComponent, {
      data: project,
      width: 'w-full',
      panelClass: 'custom-dialog-container',
    });
  }

  // Animate logic
  private animateHeader(): void {
    const element = this.header.nativeElement;

    gsap.from(element, {
      opacity: 0,
      y: -150,
      duration: 3,
      ease: 'power2.out',
    });
  }

  private animateFilter(): void {
    const element = this.filter.nativeElement;

    gsap.from(element, {
      opacity: 0,
      y: -70,
      duration: 3,
      ease: 'power2.out',
    });
  }

  private animateProjects(): void {
    const element = this.projects.nativeElement;

    gsap.from(element, {
      opacity: 0,
      y: -80,
      duration: 3,
      ease: 'power2.out',
    });
  }
}
