import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarEsimComponent } from './stellar-esim.component';

describe('StellarEsimComponent', () => {
  let component: StellarEsimComponent;
  let fixture: ComponentFixture<StellarEsimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarEsimComponent]
    });
    fixture = TestBed.createComponent(StellarEsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
