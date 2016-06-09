export class Angular2BootstrapPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-bootstrap-app h1')).getText();
  }
}
