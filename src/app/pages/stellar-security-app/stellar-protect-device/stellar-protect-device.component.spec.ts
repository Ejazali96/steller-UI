import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarProtectDeviceComponent } from './stellar-protect-device.component';

describe('StellarProtectDeviceComponent', () => {
  let component: StellarProtectDeviceComponent;
  let fixture: ComponentFixture<StellarProtectDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarProtectDeviceComponent]
    });
    fixture = TestBed.createComponent(StellarProtectDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
