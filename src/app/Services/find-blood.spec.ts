import { TestBed } from '@angular/core/testing';

import { FindBlood } from './find-blood';

describe('FindBlood', () => {
  let service: FindBlood;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindBlood);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
