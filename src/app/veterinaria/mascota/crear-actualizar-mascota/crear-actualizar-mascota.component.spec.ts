import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarMascotaComponent } from './crear-actualizar-mascota.component';

describe('CrearActualizarMascotaComponent', () => {
  let component: CrearActualizarMascotaComponent;
  let fixture: ComponentFixture<CrearActualizarMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearActualizarMascotaComponent]
    });
    fixture = TestBed.createComponent(CrearActualizarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
