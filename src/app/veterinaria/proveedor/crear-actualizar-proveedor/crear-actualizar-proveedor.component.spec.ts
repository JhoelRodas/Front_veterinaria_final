import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarProveedorComponent } from './crear-actualizar-proveedor.component';

describe('CrearActualizarProveedorComponent', () => {
  let component: CrearActualizarProveedorComponent;
  let fixture: ComponentFixture<CrearActualizarProveedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearActualizarProveedorComponent]
    });
    fixture = TestBed.createComponent(CrearActualizarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
