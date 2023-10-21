import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSourceSectionComponent } from './open-source-section.component';

describe('OpenSourceSectionComponent', () => {
  let component: OpenSourceSectionComponent;
  let fixture: ComponentFixture<OpenSourceSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenSourceSectionComponent]
    });
    fixture = TestBed.createComponent(OpenSourceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
