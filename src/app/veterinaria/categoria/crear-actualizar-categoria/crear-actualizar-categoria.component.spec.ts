import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarCategoriaComponent } from './crear-actualizar-categoria.component';

describe('CrearActualizarCategoriaComponent', () => {
  let component: CrearActualizarCategoriaComponent;
  let fixture: ComponentFixture<CrearActualizarCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearActualizarCategoriaComponent]
    });
    fixture = TestBed.createComponent(CrearActualizarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
