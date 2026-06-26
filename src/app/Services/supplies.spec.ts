import { TestBed } from '@angular/core/testing';

import { Supplies } from './supplies';

describe('Supplies', () => {
  let service: Supplies;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Supplies);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
