import { TestBed } from '@angular/core/testing';

import { ArrecadacaoService } from './arrecadacao.service';

describe('ArrecadacaoService', () => {
  let service: ArrecadacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrecadacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
