import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaComponent } from './vacuna.component';

describe('VacunaComponent', () => {
  let component: VacunaComponent;
  let fixture: ComponentFixture<VacunaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacunaComponent]
    });
    fixture = TestBed.createComponent(VacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
