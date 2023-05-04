import { TestBed } from '@angular/core/testing';
import { Product } from '../interfaces/product';

import { HttpService } from './http-service.service';

describe('HttpServiceService', () => {
  let service: HttpService<Product>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
