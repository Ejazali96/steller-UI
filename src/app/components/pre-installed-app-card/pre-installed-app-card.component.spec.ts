import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreInstalledAppCardComponent } from './pre-installed-app-card.component';

describe('PreInstalledAppCardComponent', () => {
  let component: PreInstalledAppCardComponent;
  let fixture: ComponentFixture<PreInstalledAppCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreInstalledAppCardComponent]
    });
    fixture = TestBed.createComponent(PreInstalledAppCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
