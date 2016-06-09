"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Angular2BootstrapAppComponent = (function () {
    function Angular2BootstrapAppComponent() {
        this.title = 'angular2-bootstrap works!';
    }
    Angular2BootstrapAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angular2-bootstrap-app',
            templateUrl: 'angular2-bootstrap.component.html',
            styleUrls: ['angular2-bootstrap.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Angular2BootstrapAppComponent);
    return Angular2BootstrapAppComponent;
}());
exports.Angular2BootstrapAppComponent = Angular2BootstrapAppComponent;
//# sourceMappingURL=angular2-bootstrap.component.js.map