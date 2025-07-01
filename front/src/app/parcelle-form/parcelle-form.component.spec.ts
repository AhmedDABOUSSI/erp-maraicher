import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelleFormComponent } from './parcelle-form.component';

describe('ParcelleFormComponent', () => {
  let component: ParcelleFormComponent;
  let fixture: ComponentFixture<ParcelleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcelleFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
