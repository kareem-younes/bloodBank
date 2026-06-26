import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Donateblood } from './donateblood';

describe('Donateblood', () => {
  let component: Donateblood;
  let fixture: ComponentFixture<Donateblood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Donateblood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Donateblood);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
