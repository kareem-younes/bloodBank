import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateBox } from './state-box';

describe('StateBox', () => {
  let component: StateBox;
  let fixture: ComponentFixture<StateBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
