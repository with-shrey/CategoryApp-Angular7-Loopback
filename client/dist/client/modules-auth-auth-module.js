(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./src/app/modules/auth/auth-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/modules/auth/register/register.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/modules/auth/auth.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/auth/login/login.component.ts");
/* harmony import */ var _shared_loggedin_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/loggedin.guard */ "./src/app/modules/auth/shared/loggedin.guard.ts");







var routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
        canActivate: [_shared_loggedin_guard__WEBPACK_IMPORTED_MODULE_6__["LoggedinGuard"]],
        children: [
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.component.html":
/*!**************************************************!*\
  !*** ./src/app/modules/auth/auth.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row register\">\n    <div class=\"col s3 register-left valign-wrapper\">\n      <div class=\"row\">\n        <img class=\"row col s6 offset-s3 register-left-img\" src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\"/>\n        <h5 class=\"row col s12\">Welcome</h5>\n        <p class=\"row col s12\">{{text}}</p>\n        <a class=\"row col s6 offset-s3 register-left-link\" [routerLink]=\"link\">{{button}}</a><br/>\n      </div>\n    </div>\n    <div class=\"col s9 register-right\">\n      <h5 class=\"register-heading\">{{title}}</h5>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/auth/auth.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/auth/auth.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register {\n  background: -webkit-linear-gradient(left, #3931af, #00c6ff);\n  padding: 0;\n  height: 100vh;\n  margin: 0; }\n\n.register-left {\n  text-align: center;\n  color: #fff;\n  height: 100vh; }\n\n.register-left-link {\n  border: none;\n  border-radius: 1.5rem;\n  padding: 2%;\n  background: #f8f9fa;\n  font-weight: bold;\n  color: #383d41;\n  margin-bottom: 3%;\n  cursor: pointer; }\n\n.register-right {\n  background: #f8f9fa;\n  border-top-left-radius: 10% 50%;\n  border-bottom-left-radius: 10% 50%;\n  height: 100vh; }\n\n.register-left-img {\n  width: 45px; }\n\n.register-form {\n  margin-top: 10%;\n  padding-top: 7vh;\n  padding-left: 7vw; }\n\n.btnRegister {\n  border: none;\n  border-radius: 1.5rem;\n  padding: 20px 80px;\n  background: #0062cc;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer; }\n\n.register-heading {\n  text-align: center;\n  margin-top: 8%;\n  margin-bottom: -15%;\n  color: #495057; }\n\n.helper-text {\n  color: #ff693d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NocmV5ZGV2L0RvY3VtZW50cy9Gcm9udGVuZC1UZXN0LVByb2plY3QvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyREFBMkQ7RUFDM0QsVUFBVTtFQUNWLGFBQWE7RUFDYixTQUFTLEVBQUE7O0FBRVg7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsYUFBYSxFQUFBOztBQUVmO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVye1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzkzMWFmLCAjMDBjNmZmKTtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xufVxuLnJlZ2lzdGVyLWxlZnR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ucmVnaXN0ZXItbGVmdC1saW5re1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgcGFkZGluZzogMiU7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM4M2Q0MTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZWdpc3Rlci1yaWdodHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlIDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAlIDUwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5yZWdpc3Rlci1sZWZ0LWltZ3tcbiAgd2lkdGg6IDQ1cHg7XG59XG5cbi5yZWdpc3Rlci1mb3Jte1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHBhZGRpbmctdG9wOiA3dmg7XG4gIHBhZGRpbmctbGVmdDogN3Z3O1xufVxuLmJ0blJlZ2lzdGVye1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgcGFkZGluZzogMjBweCA4MHB4O1xuICBiYWNrZ3JvdW5kOiAjMDA2MmNjO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVnaXN0ZXItaGVhZGluZ3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgbWFyZ2luLWJvdHRvbTogLTE1JTtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi5oZWxwZXItdGV4dHtcbiAgY29sb3I6ICNmZjY5M2Q7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/auth/auth.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/auth/auth.component.ts ***!
  \************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthComponent = /** @class */ (function () {
    function AuthComponent(router) {
        this.router = router;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.updateValues.bind(this)();
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(this.updateValues.bind(this));
    };
    AuthComponent.prototype.updateValues = function () {
        if (this.router.url === '/auth/login') {
            this.text = 'Not Registered?';
            this.button = 'REGISTER';
            this.link = 'register';
            this.title = 'Login';
        }
        else {
            this.text = 'Already Registered?';
            this.button = 'LOGIN';
            this.link = 'login';
            this.title = 'Registration';
        }
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/modules/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/modules/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/modules/auth/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/auth/login/login.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.component */ "./src/app/modules/auth/auth.component.ts");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/login/login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" class=\"login-form\" (ngSubmit)=\"loginUser()\">\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <i class=\"material-icons prefix\">alternate_email</i>\n      <input id=\"icon_email\" formControlName=\"email\" type=\"tel\" class=\"validate\" [(ngModel)]=\"user.email\">\n      <label for=\"icon_email\">E-mail</label>\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n        <span *ngIf=\"email.errors.required\" class=\"helper-text\" >Email cannot be empty</span>\n        <span *ngIf=\"email.errors.email\" class=\"helper-text\" >Invalid Email Format</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <i class=\"material-icons prefix\">vpn_key</i>\n      <input id=\"icon_password\" formControlName=\"password\"  type=\"password\" class=\"validate\" [(ngModel)]=\"user.password\">\n      <label for=\"icon_password\">Password</label>\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n        <span *ngIf=\"password.errors.required\" class=\"helper-text\">Password is required</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col s12\">\n      <input [ngStyle]=\"submitted ? {'background': '#c1c1c1',color: '#000000'}: {}\" type=\"submit\" class=\"btnLogin\" value=\"Login\"/>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/auth/login/login.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\n  margin-top: 10%;\n  padding-top: 7vh;\n  padding-left: 7vw; }\n\n.btnLogin {\n  float: right;\n  border: none;\n  border-radius: 1.5rem;\n  padding: 20px 80px;\n  background: #0062cc;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer; }\n\n.helper-text {\n  color: #ff693d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NocmV5ZGV2L0RvY3VtZW50cy9Gcm9udGVuZC1UZXN0LVByb2plY3QvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3Jte1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHBhZGRpbmctdG9wOiA3dmg7XG4gIHBhZGRpbmctbGVmdDogN3Z3O1xufVxuLmJ0bkxvZ2lue1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBwYWRkaW5nOiAyMHB4IDgwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDYyY2M7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVscGVyLXRleHR7XG4gIGNvbG9yOiAjZmY2OTNkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/auth/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/model/user */ "./src/app/modules/auth/shared/model/user.ts");
/* harmony import */ var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/service/auth.service */ "./src/app/modules/auth/shared/service/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, auth, _router, toastr) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.auth = auth;
        this._router = _router;
        this.toastr = toastr;
        this.submitted = false;
        this.user = new _shared_model_user__WEBPACK_IMPORTED_MODULE_3__["User"](0, '', '', '', '');
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.password, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])
        });
    }
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.submitted = true;
            this.auth.loginUser(this.user).subscribe(function (token) {
                _this.submitted = false;
                console.log(token);
                localStorage.setItem('token', token.id);
                localStorage.setItem('userId', '' + token.userId);
                _this.toastr.success('', 'Login Success');
                _this._router.navigateByUrl(_this.returnUrl);
            }, function (err) {
                _this.submitted = false;
            });
        }
        else {
            this.toastr.error('Error', 'Form Invalid');
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/register/register.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/auth/register/register.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" class=\"register-form\" (ngSubmit)=\"registerUser()\">\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <i class=\"material-icons prefix\">account_circle</i>\n      <input id=\"icon_username\" type=\"text\" formControlName=\"username\" class=\"validate\" [(ngModel)]=\"user.username\">\n      <label for=\"icon_username\">Username</label>\n      <div *ngIf=\"username.invalid && (username.dirty || username.touched)\">\n        <span *ngIf=\"username.errors.required\" class=\"helper-text\" >Username cannot be empty</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <i class=\"material-icons prefix\">alternate_email</i>\n      <input id=\"icon_email\" formControlName=\"email\" type=\"tel\" class=\"validate\" [(ngModel)]=\"user.email\">\n      <label for=\"icon_email\">E-mail</label>\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n        <span *ngIf=\"email.errors.required\" class=\"helper-text\" >Email cannot be empty</span>\n        <span *ngIf=\"email.errors.email\" class=\"helper-text\" >Invalid Email Format</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <i class=\"material-icons prefix\">vpn_key</i>\n      <input id=\"icon_password\" formControlName=\"password\"  type=\"password\" class=\"validate\" [(ngModel)]=\"user.password\">\n      <label for=\"icon_password\">Password</label>\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n        <span *ngIf=\"password.errors.MatchPassword\" class=\"helper-text\">Passwords do not match</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <i class=\"material-icons prefix\">vpn_key</i>\n      <input  id=\"icon_password_repeat\" formControlName=\"confirm_password\" type=\"password\" class=\"validate\" [(ngModel)]=\"user.confirm_password\">\n      <label for=\"icon_password_repeat\">Confirm Password</label>\n      <div *ngIf=\"confirm_password.invalid && (confirm_password.dirty)\">\n        <span *ngIf=\"confirm_password.errors.MatchPassword\" class=\"helper-text\">Passwords do not match</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col s12\">\n      <input [ngStyle]=\"submitted ? {'background': '#c1c1c1',color: '#000000'}: {}\" type=\"submit\" class=\"btnRegister\" value=\"Register\"/>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/auth/register/register.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/auth/register/register.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-form {\n  margin-top: 10%;\n  padding-top: 7vh;\n  padding-left: 7vw; }\n\n.btnRegister {\n  float: right;\n  border: none;\n  border-radius: 1.5rem;\n  padding: 20px 80px;\n  background: #0062cc;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer; }\n\n.helper-text {\n  color: #ff693d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NocmV5ZGV2L0RvY3VtZW50cy9Gcm9udGVuZC1UZXN0LVByb2plY3QvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1mb3Jte1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHBhZGRpbmctdG9wOiA3dmg7XG4gIHBhZGRpbmctbGVmdDogN3Z3O1xufVxuLmJ0blJlZ2lzdGVye1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBwYWRkaW5nOiAyMHB4IDgwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDYyY2M7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVscGVyLXRleHR7XG4gIGNvbG9yOiAjZmY2OTNkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/auth/register/register.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/register/register.component.ts ***!
  \*************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/model/user */ "./src/app/modules/auth/shared/model/user.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/service/auth.service */ "./src/app/modules/auth/shared/service/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service, formBuilder, toastr) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.submitted = false;
        this.user = new _shared_model_user__WEBPACK_IMPORTED_MODULE_2__["User"](-1, '', '', '', '');
        this.registerForm = this.formBuilder.group({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.username, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
            ]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.password, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.confirm_password, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ])
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () {
            return this.registerForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registerForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirm_password", {
        get: function () {
            return this.registerForm.get('confirm_password');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.submitted = true;
            this.service.registerUser(this.user).subscribe(function (user) {
                _this.submitted = false;
                console.log(user);
                _this.toastr.success(user.username + " Successfully", 'Registered');
            }, function (err) {
                _this.submitted = false;
            });
        }
        else {
            this.toastr.error('Error', 'Form Invalid');
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/modules/auth/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/shared/loggedin.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/shared/loggedin.guard.ts ***!
  \*******************************************************/
/*! exports provided: LoggedinGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedinGuard", function() { return LoggedinGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoggedinGuard = /** @class */ (function () {
    function LoggedinGuard(router) {
        this.router = router;
    }
    LoggedinGuard.prototype.canActivate = function (next, state) {
        var token = localStorage.getItem('token');
        if (token) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    LoggedinGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoggedinGuard);
    return LoggedinGuard;
}());



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map