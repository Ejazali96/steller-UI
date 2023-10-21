import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPackageSectionComponent } from './security-package-section.component';

describe('SecurityPackageSectionComponent', () => {
  let component: SecurityPackageSectionComponent;
  let fixture: ComponentFixture<SecurityPackageSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityPackageSectionComponent]
    });
    fixture = TestBed.createComponent(SecurityPackageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
