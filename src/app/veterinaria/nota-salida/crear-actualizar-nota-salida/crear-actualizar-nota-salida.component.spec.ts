import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarNotaSalidaComponent } from './crear-actualizar-nota-salida.component';

describe('CrearActualizarNotaSalidaComponent', () => {
  let component: CrearActualizarNotaSalidaComponent;
  let fixture: ComponentFixture<CrearActualizarNotaSalidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearActualizarNotaSalidaComponent]
    });
    fixture = TestBed.createComponent(CrearActualizarNotaSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
