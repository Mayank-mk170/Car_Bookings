import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFinanceComponent } from './car-finance.component';

describe('CarFinanceComponent', () => {
  let component: CarFinanceComponent;
  let fixture: ComponentFixture<CarFinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarFinanceComponent]
    });
    fixture = TestBed.createComponent(CarFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
