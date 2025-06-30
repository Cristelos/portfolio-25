import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  signal,
} from '@angular/core';
import { projects } from '../../data/projects.data';
import { Project } from '../../models/project.model';
import { ButtonCustomComponent } from '../button-custom/button-custom.component';
import { BadgeComponent } from '../badge/badge.component';

import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-detail-modal',
  standalone: true,
  imports: [
    CommonModule,
    ButtonCustomComponent,
    BadgeComponent,
    MatIconModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
  ],
  templateUrl: './detail-modal.component.html',
  styleUrl: './detail-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public project: Project) {}
}
