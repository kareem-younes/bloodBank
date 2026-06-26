import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsBox } from './steps-box';

describe('StepsBox', () => {
  let component: StepsBox;
  let fixture: ComponentFixture<StepsBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
