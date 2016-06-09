import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2BootstrapAppComponent } from '../app/angular2-bootstrap.component';

beforeEachProviders(() => [Angular2BootstrapAppComponent]);

describe('App: Angular2Bootstrap', () => {
  it('should create the app',
      inject([Angular2BootstrapAppComponent], (app: Angular2BootstrapAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-bootstrap works!\'',
      inject([Angular2BootstrapAppComponent], (app: Angular2BootstrapAppComponent) => {
    expect(app.title).toEqual('angular2-bootstrap works!');
  }));
});
