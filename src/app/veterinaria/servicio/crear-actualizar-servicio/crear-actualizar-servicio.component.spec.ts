import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarServicioComponent } from './crear-actualizar-servicio.component';

describe('CrearActualizarServicioComponent', () => {
  let component: CrearActualizarServicioComponent;
  let fixture: ComponentFixture<CrearActualizarServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearActualizarServicioComponent]
    });
    fixture = TestBed.createComponent(CrearActualizarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
