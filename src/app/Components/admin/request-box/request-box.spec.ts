import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBox } from './request-box';

describe('RequestBox', () => {
  let component: RequestBox;
  let fixture: ComponentFixture<RequestBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
