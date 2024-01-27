import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneComponent } from './landing-zone.component';

describe('LandingZoneComponent', () => {
  let component: LandingZoneComponent;
  let fixture: ComponentFixture<LandingZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneComponent]
    });
    fixture = TestBed.createComponent(LandingZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
