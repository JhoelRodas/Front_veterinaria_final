import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarEstanteComponent } from './crear-actualizar-estante.component';

describe('CrearActualizarEstanteComponent', () => {
  let component: CrearActualizarEstanteComponent;
  let fixture: ComponentFixture<CrearActualizarEstanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearActualizarEstanteComponent]
    });
    fixture = TestBed.createComponent(CrearActualizarEstanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
