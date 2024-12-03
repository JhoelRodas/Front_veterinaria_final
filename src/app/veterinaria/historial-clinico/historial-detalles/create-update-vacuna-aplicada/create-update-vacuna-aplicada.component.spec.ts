import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateVacunaAplicadaComponent } from './create-update-vacuna-aplicada.component';

describe('CreateUpdateVacunaAplicadaComponent', () => {
  let component: CreateUpdateVacunaAplicadaComponent;
  let fixture: ComponentFixture<CreateUpdateVacunaAplicadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUpdateVacunaAplicadaComponent]
    });
    fixture = TestBed.createComponent(CreateUpdateVacunaAplicadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
