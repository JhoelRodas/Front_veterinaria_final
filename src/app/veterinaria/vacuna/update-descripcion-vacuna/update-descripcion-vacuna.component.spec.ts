import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDescripcionVacunaComponent } from './update-descripcion-vacuna.component';

describe('UpdateDescripcionVacunaComponent', () => {
  let component: UpdateDescripcionVacunaComponent;
  let fixture: ComponentFixture<UpdateDescripcionVacunaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDescripcionVacunaComponent]
    });
    fixture = TestBed.createComponent(UpdateDescripcionVacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
