import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVentaComponent } from './detalles-venta.component';

describe('DetallesVentaComponent', () => {
  let component: DetallesVentaComponent;
  let fixture: ComponentFixture<DetallesVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesVentaComponent]
    });
    fixture = TestBed.createComponent(DetallesVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
