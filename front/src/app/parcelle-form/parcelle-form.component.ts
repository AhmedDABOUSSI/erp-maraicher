import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParcelleService } from '../services/parcelle.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parcelle-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './parcelle-form.component.html'
})
export class ParcelleFormComponent {
  parcelleForm!: FormGroup;

  constructor(private fb: FormBuilder, private parcelleService: ParcelleService) {

    this.parcelleForm = this.fb.group({
      nom: ['', Validators.required],
      longueur: [0, [Validators.required, Validators.min(1)]],
      largeur: [0, [Validators.required, Validators.min(1)]]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.parcelleForm.valid) {
      try {
        await this.parcelleService.createParcelle(this.parcelleForm.value);
        this.parcelleForm.reset();
      } catch (error) {
        console.error('Erreur lors de la création de la parcelle :', error);
      }
    }
  }
}
