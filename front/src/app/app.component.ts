import { Component } from '@angular/core';
import { ParcelleListComponent } from './parcelle-list/parcelle-list.component';
import { ParcelleFormComponent } from './parcelle-form/parcelle-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParcelleListComponent, ParcelleFormComponent],
  styles: [
    `
      .erp-section {
        margin: auto;
        text-align: center;
      }
    `,
  ],
  template: `
    <section class="erp-section">
      <h1>ERP Maraîcher</h1>
      <app-parcelle-form></app-parcelle-form>
      <app-parcelle-list></app-parcelle-list>
    </section>
  `,
})
export class AppComponent {}
