import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarWipeDemoComponent } from './stellar-wipe-demo.component';

describe('StellarWipeDemoComponent', () => {
  let component: StellarWipeDemoComponent;
  let fixture: ComponentFixture<StellarWipeDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarWipeDemoComponent]
    });
    fixture = TestBed.createComponent(StellarWipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
