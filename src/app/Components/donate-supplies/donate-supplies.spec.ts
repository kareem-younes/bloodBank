import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateSupplies } from './donate-supplies';

describe('DonateSupplies', () => {
  let component: DonateSupplies;
  let fixture: ComponentFixture<DonateSupplies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateSupplies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateSupplies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
