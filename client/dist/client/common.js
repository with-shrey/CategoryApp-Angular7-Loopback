(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/modules/auth/shared/model/user.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/auth/shared/model/user.ts ***!
  \***************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, username, email, password, confirm_password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirm_password = confirm_password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/modules/auth/shared/service/auth.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/shared/service/auth.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this._users = 'Users';
        this._login_user = this._users + '/login';
    }
    AuthService.prototype.registerUser = function (user) {
        var id = user.id, confirm_password = user.confirm_password, restUser = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](user, ["id", "confirm_password"]);
        return this.http.post(this._users, restUser);
    };
    AuthService.prototype.loginUser = function (user) {
        var email = user.email, password = user.password, restUser = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](user, ["email", "password"]);
        return this.http.post(this._login_user, { email: email, password: password });
    };
    AuthService.prototype.getUserId = function () {
        return localStorage.getItem('userId');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.getUser = function () {
        return this.http.get(this._users + '/' + this.getUserId() + '?access_token=' + this.getToken());
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['auth/login']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map