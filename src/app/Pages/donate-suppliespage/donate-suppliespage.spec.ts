import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateSuppliespage } from './donate-suppliespage';

describe('DonateSuppliespage', () => {
  let component: DonateSuppliespage;
  let fixture: ComponentFixture<DonateSuppliespage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateSuppliespage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateSuppliespage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
