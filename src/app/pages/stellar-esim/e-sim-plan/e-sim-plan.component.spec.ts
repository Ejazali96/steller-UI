import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESimPlanComponent } from './e-sim-plan.component';

describe('ESimPlanComponent', () => {
  let component: ESimPlanComponent;
  let fixture: ComponentFixture<ESimPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ESimPlanComponent]
    });
    fixture = TestBed.createComponent(ESimPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
