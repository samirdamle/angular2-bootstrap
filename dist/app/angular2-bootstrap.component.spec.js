"use strict";
var testing_1 = require('@angular/core/testing');
var angular2_bootstrap_component_1 = require('../app/angular2-bootstrap.component');
testing_1.beforeEachProviders(function () { return [angular2_bootstrap_component_1.Angular2BootstrapAppComponent]; });
testing_1.describe('App: Angular2Bootstrap', function () {
    testing_1.it('should create the app', testing_1.inject([angular2_bootstrap_component_1.Angular2BootstrapAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'angular2-bootstrap works!\'', testing_1.inject([angular2_bootstrap_component_1.Angular2BootstrapAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('angular2-bootstrap works!');
    }));
});
//# sourceMappingURL=angular2-bootstrap.component.spec.js.map