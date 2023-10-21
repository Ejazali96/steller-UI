import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDevicesSectionComponent } from './your-devices-section.component';

describe('YourDevicesSectionComponent', () => {
  let component: YourDevicesSectionComponent;
  let fixture: ComponentFixture<YourDevicesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourDevicesSectionComponent]
    });
    fixture = TestBed.createComponent(YourDevicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
