import {Component, Input} from '@angular/core';
import { IPerson } from '../app.component';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.scss'
})
export class PersonaComponent {
  @Input() person!: IPerson;
  @Input() hasDiscount!: boolean;
}
