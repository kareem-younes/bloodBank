import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateMedicine } from './donate-medicine';

describe('DonateMedicine', () => {
  let component: DonateMedicine;
  let fixture: ComponentFixture<DonateMedicine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateMedicine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateMedicine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
