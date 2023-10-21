import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreInstalledAppsSectionsComponent } from './pre-installed-apps-sections.component';

describe('PreInstalledAppsSectionsComponent', () => {
  let component: PreInstalledAppsSectionsComponent;
  let fixture: ComponentFixture<PreInstalledAppsSectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreInstalledAppsSectionsComponent]
    });
    fixture = TestBed.createComponent(PreInstalledAppsSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
