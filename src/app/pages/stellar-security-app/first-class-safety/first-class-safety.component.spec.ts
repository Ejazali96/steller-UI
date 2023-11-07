import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstClassSafetyComponent } from './first-class-safety.component';

describe('FirstClassSafetyComponent', () => {
  let component: FirstClassSafetyComponent;
  let fixture: ComponentFixture<FirstClassSafetyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstClassSafetyComponent]
    });
    fixture = TestBed.createComponent(FirstClassSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
