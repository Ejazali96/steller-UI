import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarCreateNotesComponent } from './stellar-create-notes.component';

describe('StellarCreateNotesComponent', () => {
  let component: StellarCreateNotesComponent;
  let fixture: ComponentFixture<StellarCreateNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarCreateNotesComponent]
    });
    fixture = TestBed.createComponent(StellarCreateNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
