import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  computed,
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
export default class PortfolioComponent {
  readonly dialog = inject(MatDialog);
  public allProjects = signal<Project[]>(projects);
  public selectedCategory = signal<string | null>(null);

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
}
