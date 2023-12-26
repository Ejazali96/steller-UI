import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarWipePhoneComponent } from './stellar-wipe-phone.component';

describe('StellarWipePhoneComponent', () => {
  let component: StellarWipePhoneComponent;
  let fixture: ComponentFixture<StellarWipePhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarWipePhoneComponent]
    });
    fixture = TestBed.createComponent(StellarWipePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
