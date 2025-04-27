import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBarComponent } from './location-bar.component';

describe('LocationBarComponent', () => {
  let component: LocationBarComponent;
  let fixture: ComponentFixture<LocationBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationBarComponent]
    });
    fixture = TestBed.createComponent(LocationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
