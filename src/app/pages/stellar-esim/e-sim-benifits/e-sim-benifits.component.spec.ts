import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESimBenifitsComponent } from './e-sim-benifits.component';

describe('ESimBenifitsComponent', () => {
  let component: ESimBenifitsComponent;
  let fixture: ComponentFixture<ESimBenifitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ESimBenifitsComponent]
    });
    fixture = TestBed.createComponent(ESimBenifitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
