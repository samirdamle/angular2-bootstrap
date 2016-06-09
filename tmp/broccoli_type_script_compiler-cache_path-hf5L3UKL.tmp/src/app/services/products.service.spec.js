"use strict";
var testing_1 = require('@angular/core/testing');
var products_service_1 = require('./products.service');
testing_1.describe('Products Service', function () {
    testing_1.beforeEachProviders(function () { return [products_service_1.ProductsService]; });
    testing_1.it('should ...', testing_1.inject([products_service_1.ProductsService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=products.service.spec.js.map