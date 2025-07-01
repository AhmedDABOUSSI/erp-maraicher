import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parcelle, Bande, ParcelleService } from '../services/parcelle.service';
import { BandeListComponent } from '../bande-list/bande-list.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parcelle-list',
  standalone: true,
  imports: [CommonModule, BandeListComponent],
  templateUrl: './parcelle-list.component.html',
  styles: [
    `
      table {
        margin: auto;
        text-align: center;
      }
    `,
  ],
})
export class ParcelleListComponent implements OnInit {
  parcelles: Parcelle[] = [];
  bandes: Bande[] = [];
  selectedId: number | null = null;
  private sub!: Subscription;
  constructor(private parcelleService: ParcelleService) {}

  async ngOnInit(): Promise<void> {
    await this.loadParcelles();

    this.sub = this.parcelleService.refreshParcelles$.subscribe(async () => {
      await this.loadParcelles();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  async loadParcelles(): Promise<void> {
    this.parcelles = await this.parcelleService.getParcelles();
  }

  async selectParcelle(id: number): Promise<void> {
    this.selectedId = id;
    try {
      this.bandes = await this.parcelleService.getBandes(id);
    } catch (error) {
      console.error('Erreur lors du chargement des bandes :', error);
    }
  }
}
