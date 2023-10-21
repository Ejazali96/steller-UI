import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarAntivirusComponent } from './stellar-antivirus.component';

describe('StellarAntivirusComponent', () => {
  let component: StellarAntivirusComponent;
  let fixture: ComponentFixture<StellarAntivirusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarAntivirusComponent]
    });
    fixture = TestBed.createComponent(StellarAntivirusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
