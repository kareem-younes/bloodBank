import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBlood } from './find-blood';

describe('FindBlood', () => {
  let component: FindBlood;
  let fixture: ComponentFixture<FindBlood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindBlood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindBlood);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
