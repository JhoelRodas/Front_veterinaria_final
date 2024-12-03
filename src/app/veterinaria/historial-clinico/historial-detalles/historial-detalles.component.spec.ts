import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDetallesComponent } from './historial-detalles.component';

describe('HistorialDetallesComponent', () => {
  let component: HistorialDetallesComponent;
  let fixture: ComponentFixture<HistorialDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialDetallesComponent]
    });
    fixture = TestBed.createComponent(HistorialDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
