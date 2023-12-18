import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarCircleMainComponent } from './stellar-circle-main.component';

describe('StellarCircleMainComponent', () => {
  let component: StellarCircleMainComponent;
  let fixture: ComponentFixture<StellarCircleMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarCircleMainComponent]
    });
    fixture = TestBed.createComponent(StellarCircleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
