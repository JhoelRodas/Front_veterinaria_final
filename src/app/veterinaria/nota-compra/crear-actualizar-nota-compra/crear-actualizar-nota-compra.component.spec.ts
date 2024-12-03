import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarNotaCompraComponent } from './crear-actualizar-nota-compra.component';

describe('CrearActualizarNotaCompraComponent', () => {
  let component: CrearActualizarNotaCompraComponent;
  let fixture: ComponentFixture<CrearActualizarNotaCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearActualizarNotaCompraComponent]
    });
    fixture = TestBed.createComponent(CrearActualizarNotaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
