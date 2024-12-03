import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarAtencionComponent } from './crear-actualizar-atencion.component';

describe('CrearActualizarAtencionComponent', () => {
  let component: CrearActualizarAtencionComponent;
  let fixture: ComponentFixture<CrearActualizarAtencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearActualizarAtencionComponent]
    });
    fixture = TestBed.createComponent(CrearActualizarAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
