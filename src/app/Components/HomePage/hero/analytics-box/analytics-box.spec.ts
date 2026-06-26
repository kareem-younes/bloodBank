import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsBox } from './analytics-box';

describe('AnalyticsBox', () => {
  let component: AnalyticsBox;
  let fixture: ComponentFixture<AnalyticsBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
