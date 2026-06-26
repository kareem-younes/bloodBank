import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeading } from './main-heading';

describe('MainHeading', () => {
  let component: MainHeading;
  let fixture: ComponentFixture<MainHeading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHeading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
