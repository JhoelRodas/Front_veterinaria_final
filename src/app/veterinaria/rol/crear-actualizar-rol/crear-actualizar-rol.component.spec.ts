import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarRolComponent } from './crear-actualizar-rol.component';

describe('CrearActualizarRolComponent', () => {
  let component: CrearActualizarRolComponent;
  let fixture: ComponentFixture<CrearActualizarRolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearActualizarRolComponent]
    });
    fixture = TestBed.createComponent(CrearActualizarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
