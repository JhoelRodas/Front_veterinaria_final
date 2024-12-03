import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarAgendaComponent } from './crear-actualizar-agenda.component';

describe('CrearActualizarAgendaComponent', () => {
  let component: CrearActualizarAgendaComponent;
  let fixture: ComponentFixture<CrearActualizarAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearActualizarAgendaComponent]
    });
    fixture = TestBed.createComponent(CrearActualizarAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
