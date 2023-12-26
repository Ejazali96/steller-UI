import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalStoreComponent } from './physical-store.component';

describe('PhysicalStoreComponent', () => {
  let component: PhysicalStoreComponent;
  let fixture: ComponentFixture<PhysicalStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhysicalStoreComponent]
    });
    fixture = TestBed.createComponent(PhysicalStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
