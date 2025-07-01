import { Injectable } from '@angular/core';
import axios from 'axios';
import { Subject } from 'rxjs';
export interface Parcelle {
  id: number;
  nom: string;
  longueur: number;
  largeur: number;
  nbBandes?: number;
}

export interface Bande {
  id: number;
  numero: number;
  longueur: number;
  largeur: number;
}

@Injectable({
  providedIn: 'root',
})
export class ParcelleService {
  private baseUrl = 'http://localhost:3000';
  refreshParcelles$ = new Subject<void>();

  async createParcelle(parcelle: {
    nom: string;
    longueur: number;
    largeur: number;
  }): Promise<Parcelle> {
    const { data } = await axios.post<Parcelle>(
      `${this.baseUrl}/parcelles`,
      parcelle
    );
    this.refreshParcelles$.next();
    return data;
  }

  async getParcelles(): Promise<Parcelle[]> {
    const { data } = await axios.get<Parcelle[]>(`${this.baseUrl}/parcelles`);
    console.log(data);
    return data;
  }

  async getBandes(parcelleId: number): Promise<Bande[]> {
    const { data } = await axios.get<Bande[]>(
      `${this.baseUrl}/parcelles/${parcelleId}/bandes`
    );
    return data;
  }
}
