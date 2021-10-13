import { TestBed } from '@angular/core/testing';

import { GuardarProductosServiceService } from './guardar-productos.service.service';

describe('GuardarProductos.ServiceService', () => {
  let service: GuardarProductos.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardarProductosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
