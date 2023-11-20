import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarStoreComponent } from './stellar-store.component';

describe('StellarStoreComponent', () => {
  let component: StellarStoreComponent;
  let fixture: ComponentFixture<StellarStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarStoreComponent]
    });
    fixture = TestBed.createComponent(StellarStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
