import { Component, Input } from '@angular/core';

@Component({
  selector: 'history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  @Input() history: number[] = [];
}
