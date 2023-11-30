import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagItemsComponent } from './bag-items.component';

describe('BagItemsComponent', () => {
  let component: BagItemsComponent;
  let fixture: ComponentFixture<BagItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BagItemsComponent]
    });
    fixture = TestBed.createComponent(BagItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
