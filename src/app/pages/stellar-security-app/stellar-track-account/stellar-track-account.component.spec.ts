import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarTrackAccountComponent } from './stellar-track-account.component';

describe('StellarTrackAccountComponent', () => {
  let component: StellarTrackAccountComponent;
  let fixture: ComponentFixture<StellarTrackAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarTrackAccountComponent]
    });
    fixture = TestBed.createComponent(StellarTrackAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
