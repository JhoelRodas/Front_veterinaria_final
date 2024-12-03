import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReporteCompraComponent } from './crear-reporte-compra.component';

describe('CrearReporteCompraComponent', () => {
  let component: CrearReporteCompraComponent;
  let fixture: ComponentFixture<CrearReporteCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearReporteCompraComponent]
    });
    fixture = TestBed.createComponent(CrearReporteCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
