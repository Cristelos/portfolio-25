import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { WaveComponent } from '../../shared/decorations/wave/wave.component';
import { DotsComponent } from '../../shared/decorations/dots/dots.component';
import { projects } from '../../shared/data/projects.data';
import { Project } from '../../shared/models/project.model';
import { ButtonCustomComponent } from '../../shared/components/button-custom/button-custom.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { DetailModalComponent } from '../../shared/components/detail-modal/detail-modal.component';

import { MatIconModule } from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

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
    MatDialogModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioComponent {
  public projectsList = signal<Project[]>(projects);

  readonly dialog = inject(MatDialog);

  openDialog(project: Project): void {
    const dialogRef = this.dialog.open(DetailModalComponent, {
      data: project,
      width: 'w-full', // puedes ajustar el tamaño aquí
      panelClass: 'custom-dialog-container' // si quieres estilizarlo
    });
  }
}
