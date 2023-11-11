import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarHomeCardsComponent } from './stellar-home-cards.component';

describe('StellarHomeCardsComponent', () => {
  let component: StellarHomeCardsComponent;
  let fixture: ComponentFixture<StellarHomeCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarHomeCardsComponent]
    });
    fixture = TestBed.createComponent(StellarHomeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
