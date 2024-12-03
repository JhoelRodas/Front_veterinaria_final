import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaCompraComponent } from './nota-compra.component';

describe('NotaCompraComponent', () => {
  let component: NotaCompraComponent;
  let fixture: ComponentFixture<NotaCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotaCompraComponent]
    });
    fixture = TestBed.createComponent(NotaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
