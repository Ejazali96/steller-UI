import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbracSectionComponent } from './embrac-section.component';

describe('EmbracSectionComponent', () => {
  let component: EmbracSectionComponent;
  let fixture: ComponentFixture<EmbracSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbracSectionComponent]
    });
    fixture = TestBed.createComponent(EmbracSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
