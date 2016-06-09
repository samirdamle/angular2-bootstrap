import { Angular2BootstrapPage } from './app.po';

describe('angular2-bootstrap App', function() {
  let page: Angular2BootstrapPage;

  beforeEach(() => {
    page = new Angular2BootstrapPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-bootstrap works!');
  });
});
