import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeactionHeader } from './seaction-header';

describe('SeactionHeader', () => {
  let component: SeactionHeader;
  let fixture: ComponentFixture<SeactionHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeactionHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeactionHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
