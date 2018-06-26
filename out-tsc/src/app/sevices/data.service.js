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
Object.defineProperty(exports, "__esModule", { value: true });
var bad_input_1 = require("./../common/bad-input");
var not_found_error_1 = require("./../common/not-found-error");
var app_error_1 = require("./../common/app-error");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var DataService = /** @class */ (function () {
    function DataService(url, http) {
        this.url = url;
        this.http = http;
    }
    DataService.prototype.getAll = function () {
        return this.http.get(this.url)
            .map(function (responce) { return responce.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.create = function (resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .map(function (responce) { return responce.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.update = function (resource) {
        // using patch used if we are modifing few properties and should be compatible at backend. Used for performance enhansing
        return this.http.patch(this.url + resource.id, JSON.stringify({ isRead: true }))
            .map(function (responce) { return responce.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.delete = function (resource) {
        return this.http.delete(this.url + resource.id)
            .map(function (responce) { return responce.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        if (error.status === 404) {
            return Observable_1.Observable.throw(new not_found_error_1.NotFoundError());
        }
        if (error.status === 400) {
            return Observable_1.Observable.throw(new bad_input_1.BadInput(error.json()));
        }
        return Observable_1.Observable.throw(new app_error_1.AppError(error));
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [String, http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map