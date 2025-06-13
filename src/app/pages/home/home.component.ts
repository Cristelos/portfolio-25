import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonCustomComponent } from "../../shared/components/button-custom/button-custom.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonCustomComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent { }
