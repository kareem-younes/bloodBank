import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignIN } from './sign-in';

describe('SignIN', () => {
  let component: SignIN;
  let fixture: ComponentFixture<SignIN>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignIN]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignIN);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
