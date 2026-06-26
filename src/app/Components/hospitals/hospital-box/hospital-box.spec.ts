import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBox } from './hospital-box';

describe('HospitalBox', () => {
  let component: HospitalBox;
  let fixture: ComponentFixture<HospitalBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
