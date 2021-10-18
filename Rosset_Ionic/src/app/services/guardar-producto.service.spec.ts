import { TestBed } from '@angular/core/testing';

import { GuardarProductoService } from './guardar-producto.service';

describe('GuardarProductoService', () => {
  let service: GuardarProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardarProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
