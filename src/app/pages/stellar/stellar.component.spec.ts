import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarComponent } from './stellar.component';

describe('StellarComponent', () => {
  let component: StellarComponent;
  let fixture: ComponentFixture<StellarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarComponent]
    });
    fixture = TestBed.createComponent(StellarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
