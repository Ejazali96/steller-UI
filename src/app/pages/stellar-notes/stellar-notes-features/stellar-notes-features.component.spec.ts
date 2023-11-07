import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarNotesFeaturesComponent } from './stellar-notes-features.component';

describe('StellarNotesFeaturesComponent', () => {
  let component: StellarNotesFeaturesComponent;
  let fixture: ComponentFixture<StellarNotesFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarNotesFeaturesComponent]
    });
    fixture = TestBed.createComponent(StellarNotesFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
