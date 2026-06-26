import { TestBed } from '@angular/core/testing';

import { HosptialServices } from './hosptial-services';

describe('HosptialServices', () => {
  let service: HosptialServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HosptialServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
