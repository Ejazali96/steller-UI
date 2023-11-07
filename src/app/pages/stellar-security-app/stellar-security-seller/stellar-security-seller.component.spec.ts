import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarSecuritySellerComponent } from './stellar-security-seller.component';

describe('StellarSecuritySellerComponent', () => {
  let component: StellarSecuritySellerComponent;
  let fixture: ComponentFixture<StellarSecuritySellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarSecuritySellerComponent]
    });
    fixture = TestBed.createComponent(StellarSecuritySellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
