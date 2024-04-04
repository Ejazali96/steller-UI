import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarMoreProductsComponent } from './stellar-more-products.component';

describe('StellarMoreProductsComponent', () => {
  let component: StellarMoreProductsComponent;
  let fixture: ComponentFixture<StellarMoreProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarMoreProductsComponent]
    });
    fixture = TestBed.createComponent(StellarMoreProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
