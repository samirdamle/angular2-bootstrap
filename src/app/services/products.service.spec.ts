import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ProductsService } from './products.service';

describe('Products Service', () => {
  beforeEachProviders(() => [ProductsService]);

  it('should ...',
      inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
});
