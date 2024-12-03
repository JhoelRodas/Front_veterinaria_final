import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarDetallesComponent } from './crear-actualizar-detalles.component';

describe('CrearActualizarDetallesComponent', () => {
  let component: CrearActualizarDetallesComponent;
  let fixture: ComponentFixture<CrearActualizarDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearActualizarDetallesComponent]
    });
    fixture = TestBed.createComponent(CrearActualizarDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
