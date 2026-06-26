import { TestBed } from '@angular/core/testing';

import { Registar } from './registar';

describe('Registar', () => {
  let service: Registar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Registar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
