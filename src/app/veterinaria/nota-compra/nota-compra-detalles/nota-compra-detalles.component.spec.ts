import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaCompraDetallesComponent } from './nota-compra-detalles.component';

describe('NotaCompraDetallesComponent', () => {
  let component: NotaCompraDetallesComponent;
  let fixture: ComponentFixture<NotaCompraDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotaCompraDetallesComponent]
    });
    fixture = TestBed.createComponent(NotaCompraDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
