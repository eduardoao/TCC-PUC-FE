import { TestBed } from '@angular/core/testing';

import { EducacaoService } from './educacao.service';

describe('EducacaoService', () => {
  let service: EducacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
