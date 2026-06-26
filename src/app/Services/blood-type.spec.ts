import { TestBed } from '@angular/core/testing';

import { BloodType } from './blood-type';

describe('BloodType', () => {
  let service: BloodType;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodType);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
