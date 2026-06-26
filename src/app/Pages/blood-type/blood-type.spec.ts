import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodType } from './blood-type';

describe('BloodType', () => {
  let component: BloodType;
  let fixture: ComponentFixture<BloodType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
