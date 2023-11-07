import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarPrivacyComponent } from './stellar-privacy.component';

describe('StellarPrivacyComponent', () => {
  let component: StellarPrivacyComponent;
  let fixture: ComponentFixture<StellarPrivacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarPrivacyComponent]
    });
    fixture = TestBed.createComponent(StellarPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
