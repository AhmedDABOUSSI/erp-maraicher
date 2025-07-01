import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bande } from '../services/parcelle.service';

@Component({
  selector: 'app-bande-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bande-list.component.html',
  styles: [
    `
      ul {
        list-style: none;
      }
    `,
  ],
})
export class BandeListComponent {
  @Input() bandes: Bande[] = [];
}
