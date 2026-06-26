import { TestBed } from '@angular/core/testing';

import { Donateblood } from './donateblood';

describe('Donateblood', () => {
  let service: Donateblood;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Donateblood);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
