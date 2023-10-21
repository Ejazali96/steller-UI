import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellerosComponent } from './stelleros.component';

describe('StellerosComponent', () => {
  let component: StellerosComponent;
  let fixture: ComponentFixture<StellerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellerosComponent]
    });
    fixture = TestBed.createComponent(StellerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
