import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarCircleFeaturesComponent } from './stellar-circle-features.component';

describe('StellarCircleFeaturesComponent', () => {
  let component: StellarCircleFeaturesComponent;
  let fixture: ComponentFixture<StellarCircleFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarCircleFeaturesComponent]
    });
    fixture = TestBed.createComponent(StellarCircleFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
