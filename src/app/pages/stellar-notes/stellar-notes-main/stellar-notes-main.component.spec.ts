import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarNotesMainComponent } from './stellar-notes-main.component';

describe('StellarNotesMainComponent', () => {
  let component: StellarNotesMainComponent;
  let fixture: ComponentFixture<StellarNotesMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarNotesMainComponent]
    });
    fixture = TestBed.createComponent(StellarNotesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
