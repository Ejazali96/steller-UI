import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarVPNComponent } from './stellar-vpn.component';

describe('StellarVPNComponent', () => {
  let component: StellarVPNComponent;
  let fixture: ComponentFixture<StellarVPNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarVPNComponent]
    });
    fixture = TestBed.createComponent(StellarVPNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
