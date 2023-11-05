import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarSecurityComponent } from './stellar-security.component';

describe('StellarSecurityComponent', () => {
  let component: StellarSecurityComponent;
  let fixture: ComponentFixture<StellarSecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellarSecurityComponent]
    });
    fixture = TestBed.createComponent(StellarSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
