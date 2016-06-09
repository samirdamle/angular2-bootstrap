"use strict";
var testing_1 = require('@angular/core/testing');
var users_service_1 = require('./users.service');
testing_1.describe('Users Service', function () {
    testing_1.beforeEachProviders(function () { return [users_service_1.UsersService]; });
    testing_1.it('should ...', testing_1.inject([users_service_1.UsersService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=users.service.spec.js.map