(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-categories-categories-module"],{

/***/ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js ***!
  \*****************************************************************************/
/*! exports provided: InfiniteScrollDirective, InfiniteScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function() { return InfiniteScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollModule", function() { return InfiniteScrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} selector
 * @param {?} scrollWindow
 * @param {?} defaultElement
 * @param {?} fromRoot
 * @return {?}
 */
function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
    /** @type {?} */
    var hasWindow = window && !!window.document && window.document.documentElement;
    /** @type {?} */
    var container = hasWindow && scrollWindow ? window : defaultElement;
    if (selector) {
        /** @type {?} */
        var containerIsString = selector && hasWindow && typeof selector === 'string';
        container = containerIsString
            ? findElement(selector, defaultElement.nativeElement, fromRoot)
            : selector;
        if (!container) {
            throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
        }
    }
    return container;
}
/**
 * @param {?} selector
 * @param {?} customRoot
 * @param {?} fromRoot
 * @return {?}
 */
function findElement(selector, customRoot, fromRoot) {
    /** @type {?} */
    var rootEl = fromRoot ? window.document : customRoot;
    return rootEl.querySelector(selector);
}
/**
 * @param {?} prop
 * @return {?}
 */
function inputPropChanged(prop) {
    return prop && !prop.firstChange;
}
/**
 * @return {?}
 */
function hasWindowDefined() {
    return typeof window !== 'undefined';
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var VerticalProps = {
    clientHeight: "clientHeight",
    offsetHeight: "offsetHeight",
    scrollHeight: "scrollHeight",
    pageYOffset: "pageYOffset",
    offsetTop: "offsetTop",
    scrollTop: "scrollTop",
    top: "top"
};
/** @type {?} */
var HorizontalProps = {
    clientHeight: "clientWidth",
    offsetHeight: "offsetWidth",
    scrollHeight: "scrollWidth",
    pageYOffset: "pageXOffset",
    offsetTop: "offsetLeft",
    scrollTop: "scrollLeft",
    top: "left"
};
var AxisResolver = /** @class */ (function () {
    /**
     * @param {?=} vertical
     */
    function AxisResolver(vertical) {
        if (vertical === void 0) { vertical = true; }
        this.vertical = vertical;
        this.propsMap = vertical ? VerticalProps : HorizontalProps;
    }
    /**
     * @return {?}
     */
    AxisResolver.prototype.clientHeightKey = function () {
        return this.propsMap.clientHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.offsetHeightKey = function () {
        return this.propsMap.offsetHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.scrollHeightKey = function () {
        return this.propsMap.scrollHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.pageYOffsetKey = function () {
        return this.propsMap.pageYOffset;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.offsetTopKey = function () {
        return this.propsMap.offsetTop;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.scrollTopKey = function () {
        return this.propsMap.scrollTop;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.topKey = function () {
        return this.propsMap.top;
    };
    return AxisResolver;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @param {?} alwaysCallback
 * @param {?} shouldFireScrollEvent
 * @param {?} isTriggeredCurrentTotal
 * @return {?}
 */
function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
    return (alwaysCallback || shouldFireScrollEvent) && !isTriggeredCurrentTotal;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} __0
 * @return {?}
 */
function createResolver(_a) {
    var windowElement = _a.windowElement, axis = _a.axis;
    return createResolverWithContainer({ axis: axis, isWindow: isElementWindow(windowElement) }, windowElement);
}
/**
 * @param {?} resolver
 * @param {?} windowElement
 * @return {?}
 */
function createResolverWithContainer(resolver, windowElement) {
    /** @type {?} */
    var container = resolver.isWindow || (windowElement && !windowElement.nativeElement)
        ? windowElement
        : windowElement.nativeElement;
    return Object.assign({}, resolver, { container: container });
}
/**
 * @param {?} windowElement
 * @return {?}
 */
function isElementWindow(windowElement) {
    /** @type {?} */
    var isWindow = ['Window', 'global'].some(function (obj) { return Object.prototype.toString.call(windowElement).includes(obj); });
    return isWindow;
}
/**
 * @param {?} isContainerWindow
 * @param {?} windowElement
 * @return {?}
 */
function getDocumentElement(isContainerWindow, windowElement) {
    return isContainerWindow ? windowElement.document.documentElement : null;
}
/**
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePoints(element, resolver) {
    /** @type {?} */
    var height = extractHeightForElement(resolver);
    return resolver.isWindow
        ? calculatePointsForWindow(height, element, resolver)
        : calculatePointsForElement(height, element, resolver);
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForWindow(height, element, resolver) {
    var axis = resolver.axis, container = resolver.container, isWindow = resolver.isWindow;
    var _a = extractHeightPropKeys(axis), offsetHeightKey = _a.offsetHeightKey, clientHeightKey = _a.clientHeightKey;
    // scrolled until now / current y point
    /** @type {?} */
    var scrolled = height +
        getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
    // total height / most bottom y point
    /** @type {?} */
    var nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
    /** @type {?} */
    var totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) +
        nativeElementHeight;
    return { height: height, scrolled: scrolled, totalToScroll: totalToScroll };
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForElement(height, element, resolver) {
    var axis = resolver.axis, container = resolver.container;
    // perhaps use container.offsetTop instead of 'scrollTop'
    /** @type {?} */
    var scrolled = container[axis.scrollTopKey()];
    /** @type {?} */
    var totalToScroll = container[axis.scrollHeightKey()];
    return { height: height, scrolled: scrolled, totalToScroll: totalToScroll };
}
/**
 * @param {?} axis
 * @return {?}
 */
function extractHeightPropKeys(axis) {
    return {
        offsetHeightKey: axis.offsetHeightKey(),
        clientHeightKey: axis.clientHeightKey()
    };
}
/**
 * @param {?} __0
 * @return {?}
 */
function extractHeightForElement(_a) {
    var container = _a.container, isWindow = _a.isWindow, axis = _a.axis;
    var _b = extractHeightPropKeys(axis), offsetHeightKey = _b.offsetHeightKey, clientHeightKey = _b.clientHeightKey;
    return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
/**
 * @param {?} elem
 * @param {?} isWindow
 * @param {?} offsetHeightKey
 * @param {?} clientHeightKey
 * @return {?}
 */
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
    if (isNaN(elem[offsetHeightKey])) {
        /** @type {?} */
        var docElem = getDocumentElement(isWindow, elem);
        return docElem ? docElem[clientHeightKey] : 0;
    }
    else {
        return elem[offsetHeightKey];
    }
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementOffsetTop(elem, axis, isWindow) {
    /** @type {?} */
    var topKey = axis.topKey();
    // elem = elem.nativeElement;
    if (!elem.getBoundingClientRect) {
        // || elem.css('none')) {
        return;
    }
    return (elem.getBoundingClientRect()[topKey] +
        getElementPageYOffset(elem, axis, isWindow));
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementPageYOffset(elem, axis, isWindow) {
    /** @type {?} */
    var pageYOffset = axis.pageYOffsetKey();
    /** @type {?} */
    var scrollTop = axis.scrollTopKey();
    /** @type {?} */
    var offsetTop = axis.offsetTopKey();
    if (isNaN(window[pageYOffset])) {
        return getDocumentElement(isWindow, elem)[scrollTop];
    }
    else if (elem.ownerDocument) {
        return elem.ownerDocument.defaultView[pageYOffset];
    }
    else {
        return elem[offsetTop];
    }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} container
 * @param {?} distance
 * @param {?} scrollingDown
 * @return {?}
 */
function shouldFireScrollEvent(container, distance, scrollingDown) {
    /** @type {?} */
    var remaining;
    /** @type {?} */
    var containerBreakpoint;
    if (container.totalToScroll <= 0) {
        return false;
    }
    /** @type {?} */
    var scrolledUntilNow = container.height + container.scrolled;
    if (scrollingDown) {
        remaining =
            (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
        containerBreakpoint = distance.down / 10;
    }
    else {
        /** @type {?} */
        var totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
        remaining = container.scrolled / totalHiddenContentHeight;
        containerBreakpoint = distance.up / 10;
    }
    /** @type {?} */
    var shouldFireEvent = remaining <= containerBreakpoint;
    return shouldFireEvent;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @return {?}
 */
function isScrollingDownwards(lastScrollPosition, container) {
    return lastScrollPosition < container.scrolled;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @param {?} distance
 * @return {?}
 */
function getScrollStats(lastScrollPosition, container, distance) {
    /** @type {?} */
    var scrollDown = isScrollingDownwards(lastScrollPosition, container);
    return {
        fire: shouldFireScrollEvent(container, distance, scrollDown),
        scrollDown: scrollDown
    };
}
/**
 * @param {?} position
 * @param {?} scrollState
 * @return {?}
 */
function updateScrollPosition(position, scrollState) {
    return (scrollState.lastScrollPosition = position);
}
/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @return {?}
 */
function updateTotalToScroll(totalToScroll, scrollState) {
    if (scrollState.lastTotalToScroll !== totalToScroll) {
        scrollState.lastTotalToScroll = scrollState.totalToScroll;
        scrollState.totalToScroll = totalToScroll;
    }
}
/**
 * @param {?} scrollState
 * @return {?}
 */
/**
 * @param {?} scroll
 * @param {?} scrollState
 * @param {?} triggered
 * @param {?} isScrollingDown
 * @return {?}
 */
function updateTriggeredFlag(scroll, scrollState, triggered, isScrollingDown) {
    if (isScrollingDown) {
        scrollState.triggered.down = scroll;
    }
    else {
        scrollState.triggered.up = scroll;
    }
}
/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @param {?} isScrollingDown
 * @return {?}
 */
function isTriggeredScroll(totalToScroll, scrollState, isScrollingDown) {
    return isScrollingDown
        ? scrollState.triggered.down === totalToScroll
        : scrollState.triggered.up === totalToScroll;
}
/**
 * @param {?} scrollState
 * @param {?} scrolledUntilNow
 * @param {?} totalToScroll
 * @return {?}
 */
function updateScrollState(scrollState, scrolledUntilNow, totalToScroll) {
    updateScrollPosition(scrolledUntilNow, scrollState);
    updateTotalToScroll(totalToScroll, scrollState);
    // const isSameTotal = isSameTotalToScroll(scrollState);
    // if (!isSameTotal) {
    //   updateTriggeredFlag(scrollState, false, isScrollingDown);
    // }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function createScroller(config) {
    var scrollContainer = config.scrollContainer, scrollWindow = config.scrollWindow, element = config.element, fromRoot = config.fromRoot;
    /** @type {?} */
    var resolver = createResolver({
        axis: new AxisResolver(!config.horizontal),
        windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
    });
    var startWithTotal = calculatePoints(element, resolver).totalToScroll;
    /** @type {?} */
    var scrollState = {
        lastScrollPosition: 0,
        lastTotalToScroll: 0,
        totalToScroll: startWithTotal,
        triggered: {
            down: 0,
            up: 0
        }
    };
    /** @type {?} */
    var options = {
        container: resolver.container,
        throttle: config.throttle
    };
    /** @type {?} */
    var distance = {
        up: config.upDistance,
        down: config.downDistance
    };
    return attachScrollEvent(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(calculatePoints(element, resolver)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (positionStats) { return toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
        var stats = _a.stats, scrollDown = _a.scrollDown;
        return updateScrollState(scrollState, stats.scrolled, stats.totalToScroll);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
        var fire = _a.fire, scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
        return shouldTriggerEvents(config.alwaysCallback, fire, isTriggeredScroll(totalToScroll, scrollState, scrollDown));
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
        var scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
        updateTriggeredFlag(totalToScroll, scrollState, true, scrollDown);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(toInfiniteScrollAction));
}
/**
 * @param {?} options
 * @return {?}
 */
function attachScrollEvent(options) {
    /** @type {?} */
    var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(options.container, 'scroll');
    // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
    // Let's avoid calling the function unless needed.
    // See https://github.com/orizens/ngx-infinite-scroll/issues/198
    if (options.throttle) {
        obs = obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sampleTime"])(options.throttle));
    }
    return obs;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} stats
 * @param {?} distance
 * @return {?}
 */
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
    var _a = getScrollStats(lastScrollPosition, stats, distance), scrollDown = _a.scrollDown, fire = _a.fire;
    return {
        scrollDown: scrollDown,
        fire: fire,
        stats: stats
    };
}
/** @type {?} */
var InfiniteScrollActions = {
    DOWN: '[NGX_ISE] DOWN',
    UP: '[NGX_ISE] UP'
};
/**
 * @param {?} response
 * @return {?}
 */
function toInfiniteScrollAction(response) {
    var scrollDown = response.scrollDown, currentScrollPosition = response.stats.scrolled;
    return {
        type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
        payload: {
            currentScrollPosition: currentScrollPosition
        }
    };
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InfiniteScrollDirective = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} zone
     */
    function InfiniteScrollDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1.5;
        this.infiniteScrollThrottle = 150;
        this.infiniteScrollDisabled = false;
        this.infiniteScrollContainer = null;
        this.scrollWindow = true;
        this.immediateCheck = false;
        this.horizontal = false;
        this.alwaysCallback = false;
        this.fromRoot = false;
    }
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngAfterViewInit = function () {
        if (!this.infiniteScrollDisabled) {
            this.setup();
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnChanges = function (_a) {
        var infiniteScrollContainer = _a.infiniteScrollContainer, infiniteScrollDisabled = _a.infiniteScrollDisabled, infiniteScrollDistance = _a.infiniteScrollDistance;
        /** @type {?} */
        var containerChanged = inputPropChanged(infiniteScrollContainer);
        /** @type {?} */
        var disabledChanged = inputPropChanged(infiniteScrollDisabled);
        /** @type {?} */
        var distanceChanged = inputPropChanged(infiniteScrollDistance);
        /** @type {?} */
        var shouldSetup = (!disabledChanged && !this.infiniteScrollDisabled) ||
            (disabledChanged && !infiniteScrollDisabled.currentValue) || distanceChanged;
        if (containerChanged || disabledChanged || distanceChanged) {
            this.destroyScroller();
            if (shouldSetup) {
                this.setup();
            }
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.setup = function () {
        var _this = this;
        if (hasWindowDefined()) {
            this.zone.runOutsideAngular(function () {
                _this.disposeScroller = createScroller({
                    fromRoot: _this.fromRoot,
                    alwaysCallback: _this.alwaysCallback,
                    disable: _this.infiniteScrollDisabled,
                    downDistance: _this.infiniteScrollDistance,
                    element: _this.element,
                    horizontal: _this.horizontal,
                    scrollContainer: _this.infiniteScrollContainer,
                    scrollWindow: _this.scrollWindow,
                    throttle: _this.infiniteScrollThrottle,
                    upDistance: _this.infiniteScrollUpDistance
                }).subscribe(function (payload) { return _this.zone.run(function () { return _this.handleOnScroll(payload); }); });
            });
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    InfiniteScrollDirective.prototype.handleOnScroll = function (_a) {
        var type = _a.type, payload = _a.payload;
        switch (type) {
            case InfiniteScrollActions.DOWN:
                return this.scrolled.emit(payload);
            case InfiniteScrollActions.UP:
                return this.scrolledUp.emit(payload);
            default:
                return;
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnDestroy = function () {
        this.destroyScroller();
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.destroyScroller = function () {
        if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
        }
    };
    return InfiniteScrollDirective;
}());
InfiniteScrollDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
            },] },
];
/** @nocollapse */
InfiniteScrollDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
]; };
InfiniteScrollDirective.propDecorators = {
    scrolled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scrolledUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    infiniteScrollDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollUpDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollThrottle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    immediateCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    alwaysCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fromRoot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InfiniteScrollModule = /** @class */ (function () {
    function InfiniteScrollModule() {
    }
    return InfiniteScrollModule;
}());
InfiniteScrollModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [InfiniteScrollDirective],
                exports: [InfiniteScrollDirective],
                imports: [],
                providers: []
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular-library-starter
 */
/**
 * Entry point for all public APIs of the package.
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-infinite-scroll.es5.js.map


/***/ }),

/***/ "./src/app/modules/categories/categories-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/categories/categories-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.component */ "./src/app/modules/categories/categories.component.ts");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/modules/categories/category-list/category-list.component.ts");
/* harmony import */ var _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-edit/category-edit.component */ "./src/app/modules/categories/category-edit/category-edit.component.ts");







var routes = [
    {
        path: '',
        component: _categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"],
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_5__["CategoryListComponent"],
            },
            {
                path: ':id/edit',
                component: _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_6__["CategoryEditComponent"],
            }
        ]
    }
];
var CategoriesRoutingModule = /** @class */ (function () {
    function CategoriesRoutingModule() {
    }
    CategoriesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoriesRoutingModule);
    return CategoriesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/categories/categories.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/categories/categories.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\n<nav class=\"nav\">\n  <div class=\"nav-wrapper\">\n    <a href=\"#\" class=\"brand-logo\">Category App</a>\n    <a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n    <ul class=\"right hide-on-med-and-down\">\n      <li><a (click)=\"authService.logout()\">BYE,{{user.username}}</a></li>\n    </ul>\n  </div>\n</nav>\n<app-breadcrum  *ngIf=\"breadcrum.shouldShow()\" [breadcrums]=\"breadcrum.getBreadcrum()\"></app-breadcrum>\n<ul class=\"sidenav\" id=\"mobile-demo\">\n  <li><a (click)=\"authService.logout()\">BYE,{{user.username}}</a></li>\n</ul>\n</div>\n<div class=\"router\">\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/categories/categories.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/categories/categories.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000; }\n\n.router {\n  margin-top: 140px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NocmV5ZGV2L0RvY3VtZW50cy9Gcm9udGVuZC1UZXN0LVByb2plY3QvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYSxFQUFBOztBQUVmO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4ucm91dGVye1xuICBtYXJnaW4tdG9wOiAxNDBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/modules/categories/categories.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/categories/categories.component.ts ***!
  \************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/shared/service/auth.service */ "./src/app/modules/auth/shared/service/auth.service.ts");
/* harmony import */ var _auth_shared_model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/shared/model/user */ "./src/app/modules/auth/shared/model/user.ts");
/* harmony import */ var _shared_service_breadcrum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/breadcrum.service */ "./src/app/shared/service/breadcrum.service.ts");





var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(authService, breadcrum) {
        this.authService = authService;
        this.breadcrum = breadcrum;
        this.user = new _auth_shared_model_user__WEBPACK_IMPORTED_MODULE_3__["User"](0, '', '', '', '');
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // $(document).ready(function() {
        //   $('.sidenav').sidenav();
        // });
        this.authService.getUser().subscribe(function (user) { return _this.user = user; });
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/modules/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/modules/categories/categories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _shared_service_breadcrum_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/modules/categories/categories.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/categories/categories.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/modules/categories/categories-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories.component */ "./src/app/modules/categories/categories.component.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/modules/categories/category-list/category-list.component.ts");
/* harmony import */ var _category_add_category_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-add/category-add.component */ "./src/app/modules/categories/category-add/category-add.component.ts");
/* harmony import */ var _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category-edit/category-edit.component */ "./src/app/modules/categories/category-edit/category-edit.component.ts");
/* harmony import */ var _shared_components_breadcrum_breadcrum_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/breadcrum/breadcrum.component */ "./src/app/shared/components/breadcrum/breadcrum.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");











var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"], _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_6__["CategoryListComponent"], _category_add_category_add_component__WEBPACK_IMPORTED_MODULE_7__["CategoryAddComponent"], _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_8__["CategoryEditComponent"], _shared_components_breadcrum_breadcrum_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollModule"],
            ]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ }),

/***/ "./src/app/modules/categories/category-add/category-add.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/categories/category-add/category-add.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s6 offset-s3\">\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <span (click)=\"enableAdd()\" *ngIf=\"!addMode\" class=\"card-title\"><i class=\"material-icons prefix\">add</i> Add Category</span>\n        <i *ngIf=\"addMode\" (click)=\"addMode = false\"  class=\"material-icons prefix\">close</i>\n        <div *ngIf=\"addMode\" class=\"row\">\n          <form class=\"col s12\" (ngSubmit)=\"addCategory()\">\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <input id=\"name\" type=\"text\" name=\"name\" class=\"validate\" [(ngModel)]=\"category.name\" required>\n                <label for=\"name\">Name</label>\n              </div>\n            </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <textarea id=\"textarea1\" class=\"materialize-textarea\" name=\"description\" [(ngModel)]=\"category.description\" required></textarea>\n              <label for=\"textarea1\">Description</label>\n            </div>\n          </div>\n            <div class=\"row\">\n              <input class=\"buttons\" type=\"submit\" value=\"Submit\"/>\n            </div>\n          </form>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/categories/category-add/category-add.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/categories/category-add/category-add.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS1hZGQvY2F0ZWdvcnktYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/categories/category-add/category-add.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/categories/category-add/category-add.component.ts ***!
  \***************************************************************************/
/*! exports provided: CategoryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAddComponent", function() { return CategoryAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_category_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/model/category/category */ "./src/app/modules/categories/shared/model/category/category.ts");
/* harmony import */ var _shared_service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/service/category.service */ "./src/app/modules/categories/shared/service/category.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var CategoryAddComponent = /** @class */ (function () {
    function CategoryAddComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.addMode = false;
        this.categoryAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
    };
    CategoryAddComponent.prototype.enableAdd = function () {
        this.addMode = true;
        this.category = new _shared_model_category_category__WEBPACK_IMPORTED_MODULE_2__["Category"]();
    };
    CategoryAddComponent.prototype.addCategory = function () {
        var _this = this;
        this.service.addCategory(this.category).subscribe(function (category) {
            _this.categoryAdded.emit(category);
            _this.addMode = false;
            _this.toastr.success(category.name, 'Added Successfully');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoryAddComponent.prototype, "categoryAdded", void 0);
    CategoryAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-add',
            template: __webpack_require__(/*! ./category-add.component.html */ "./src/app/modules/categories/category-add/category-add.component.html"),
            styles: [__webpack_require__(/*! ./category-add.component.scss */ "./src/app/modules/categories/category-add/category-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], CategoryAddComponent);
    return CategoryAddComponent;
}());



/***/ }),

/***/ "./src/app/modules/categories/category-edit/category-edit.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/categories/category-edit/category-edit.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<form class=\"col s6 offset-s3\" (ngSubmit)=\"updateCategory()\">\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <input id=\"name\" type=\"text\" name=\"name\" class=\"validate\" [(ngModel)]=\"category.name\" required>\n      <label class=\"active\" for=\"name\">Name</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <textarea id=\"textarea1\" class=\"materialize-textarea\" name=\"description\" [(ngModel)]=\"category.description\" required></textarea>\n      <label class=\"active\" for=\"textarea1\">Description</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <input class=\"buttons\" type=\"submit\" value=\"Submit\"/>\n  </div>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/categories/category-edit/category-edit.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/categories/category-edit/category-edit.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS1lZGl0L2NhdGVnb3J5LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/categories/category-edit/category-edit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/categories/category-edit/category-edit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoryEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditComponent", function() { return CategoryEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/service/category.service */ "./src/app/modules/categories/shared/service/category.service.ts");
/* harmony import */ var _shared_service_breadcrum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/breadcrum.service */ "./src/app/shared/service/breadcrum.service.ts");
/* harmony import */ var _shared_model_breadcrum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/breadcrum */ "./src/app/shared/model/breadcrum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_model_category_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/model/category/category */ "./src/app/modules/categories/shared/model/category/category.ts");








var CategoryEditComponent = /** @class */ (function () {
    function CategoryEditComponent(service, toastr, crum, route, router) {
        this.service = service;
        this.toastr = toastr;
        this.crum = crum;
        this.route = route;
        this.router = router;
        this.category = new _shared_model_category_category__WEBPACK_IMPORTED_MODULE_7__["Category"]();
    }
    CategoryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.crum.setBreadcrum([
            new _shared_model_breadcrum__WEBPACK_IMPORTED_MODULE_5__["Breadcrum"]('Categories', '/'),
            new _shared_model_breadcrum__WEBPACK_IMPORTED_MODULE_5__["Breadcrum"]('' + this.id, '/'),
            new _shared_model_breadcrum__WEBPACK_IMPORTED_MODULE_5__["Breadcrum"]('Edit', '#'),
        ]);
        this.service.getCategory(this.id).subscribe(function (category) { return _this.category = category; });
    };
    CategoryEditComponent.prototype.updateCategory = function () {
        var _this = this;
        this.service.updateCategory(this.category)
            .subscribe(function (category) {
            _this.toastr.success(category.name, 'Updated Successfully');
            _this.router.navigate(['/']);
        });
    };
    CategoryEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-edit',
            template: __webpack_require__(/*! ./category-edit.component.html */ "./src/app/modules/categories/category-edit/category-edit.component.html"),
            styles: [__webpack_require__(/*! ./category-edit.component.scss */ "./src/app/modules/categories/category-edit/category-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _shared_service_breadcrum_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CategoryEditComponent);
    return CategoryEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/categories/category-list/category-list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/categories/category-list/category-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-container\"\n     infiniteScroll\n     [infiniteScrollDistance]=\"2\"\n     [infiniteScrollThrottle]=\"100\"\n     (scrolled)=\"onScroll()\"\n     [scrollWindow]=\"false\"\n>\n  <div class=\"row\">\n  <nav class=\"col s6 offset-s3 nav\">\n    <div class=\"nav-wrapper\">\n      <form>\n        <div class=\"input-field\">\n          <input id=\"search\" name=\"search\" type=\"search\" [(ngModel)]=\"search\" (input)=\"onSearch($event.target.value)\">\n          <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n          <i class=\"material-icons\">close</i>\n        </div>\n      </form>\n    </div>\n  </nav>\n  </div>\n  <app-category-add (categoryAdded)=\"categoryAddedCallback($event)\"></app-category-add>\n  <div class=\"row\" *ngFor=\"let category of categories\">\n  <div class=\"col s6 offset-s3\">\n    <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">{{category.name}}</span>\n        <p>{{category.description}}</p>\n      </div>\n      <div class=\"card-action\">\n        <a [routerLink]=\"'/'+category.id+'/edit'\">EDIT</a>\n        <a (click)=\"deleteCategory(category)\">DELETE</a>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/categories/category-list/category-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/categories/category-list/category-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-container {\n  height: 78vh;\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NocmV5ZGV2L0RvY3VtZW50cy9Gcm9udGVuZC1UZXN0LVByb2plY3QvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9jYXRlZ29yaWVzL2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1jb250YWluZXJ7XG4gIGhlaWdodDogNzh2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/categories/category-list/category-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/categories/category-list/category-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/category.service */ "./src/app/modules/categories/shared/service/category.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_service_breadcrum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/breadcrum.service */ "./src/app/shared/service/breadcrum.service.ts");
/* harmony import */ var _shared_model_breadcrum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/breadcrum */ "./src/app/shared/model/breadcrum.ts");






var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(service, toastr, crum) {
        this.service = service;
        this.toastr = toastr;
        this.crum = crum;
        this.offset = 0;
        this.crum.setBreadcrum([new _shared_model_breadcrum__WEBPACK_IMPORTED_MODULE_5__["Breadcrum"]('Categories', '/')]);
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCategories().subscribe(function (categories) {
            _this.categories = categories;
            _this.offset += _this.service.limit;
        });
    };
    CategoryListComponent.prototype.categoryAddedCallback = function (event) {
        this.categories.unshift(event);
    };
    CategoryListComponent.prototype.deleteCategory = function (category) {
        var _this = this;
        this.service.deleteCategory(category).subscribe(function (count) {
            var index = _this.categories.indexOf(category); // <-- Not supported in <IE9
            if (index !== -1) {
                _this.categories.splice(index, 1);
            }
            _this.toastr.success('', 'Deleted Successfully');
        });
    };
    CategoryListComponent.prototype.onScroll = function () {
        var _this = this;
        if (this.search && this.search.length > 0) {
            this.service.searchCategory(this.search, this.offset).subscribe(function (categories) {
                var _a;
                (_a = _this.categories).push.apply(_a, categories);
                _this.offset += _this.service.limit;
            });
        }
        else {
            this.service.getCategories(this.offset).subscribe(function (categories) {
                var _a;
                (_a = _this.categories).push.apply(_a, categories);
                _this.offset += _this.service.limit;
            });
        }
    };
    CategoryListComponent.prototype.onSearch = function (term) {
        var _this = this;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        if (term && term.length > 0) {
            this.timeout = setTimeout(function () {
                _this.offset = 0;
                _this.service.searchCategory(term, 0).subscribe(function (categories) {
                    var _a;
                    _this.categories.length = 0;
                    (_a = _this.categories).push.apply(_a, categories);
                    _this.offset += _this.service.limit;
                });
            }, 200);
        }
        else {
            this.offset = 0;
            this.onScroll();
        }
    };
    CategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-list',
            template: __webpack_require__(/*! ./category-list.component.html */ "./src/app/modules/categories/category-list/category-list.component.html"),
            styles: [__webpack_require__(/*! ./category-list.component.scss */ "./src/app/modules/categories/category-list/category-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _shared_service_breadcrum_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumService"]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/app/modules/categories/shared/model/category/category.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/categories/shared/model/category/category.ts ***!
  \**********************************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category() {
        this.type = 'global';
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/modules/categories/shared/service/category.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/categories/shared/service/category.service.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this._category = 'Categories';
        this.limit = 10;
    }
    CategoryService.prototype.getCategories = function (offset) {
        if (offset === void 0) { offset = 0; }
        return this.http.get(this._category + "?filter={\"limit\":" + this.limit + ",\"offset\":" + offset + ",\"order\": \"id DESC\"}");
    };
    CategoryService.prototype.getCategory = function (id) {
        return this.http.get(this._category + "/" + id);
    };
    CategoryService.prototype.searchCategory = function (term, offset) {
        if (offset === void 0) { offset = 0; }
        var query;
        if (term) {
            // {"limit":${this.limit},offset:${offset}"where":{"name":{"like":"%a%"}}}
            query = "{\"order\": \"id DESC\",\"limit\": " + this.limit + ", \"offset\": " + offset + ", \"where\": {\"name\": {\"like\": \"%" + term + "%\"}}}";
        }
        else {
            query = "{\"order\": \"id DESC\",limit\": " + this.limit + ", \"offset\": " + offset + "}";
        }
        return this.http.get(this._category + "?filter=" + encodeURIComponent(query));
    };
    CategoryService.prototype.addCategory = function (category) {
        var name = category.name, description = category.description, type = category.type;
        return this.http.post(this._category, { name: name, description: description, type: type });
    };
    CategoryService.prototype.updateCategory = function (category) {
        return this.http.put(this._category, category);
    };
    CategoryService.prototype.deleteCategory = function (category) {
        return this.http.delete(this._category + "/" + category.id);
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/shared/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        else {
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/components/breadcrum/breadcrum.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrum/breadcrum.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n  <div class=\"nav-wrapper\">\n    <div class=\"col s12\">\n      <a *ngFor=\"let crum of breadcrums\" [routerLink]=\"crum.url\" class=\"breadcrumb\">{{crum.title}}</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/components/breadcrum/breadcrum.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrum/breadcrum.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bS9icmVhZGNydW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/breadcrum/breadcrum.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/breadcrum/breadcrum.component.ts ***!
  \********************************************************************/
/*! exports provided: BreadcrumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumComponent", function() { return BreadcrumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BreadcrumComponent = /** @class */ (function () {
    function BreadcrumComponent() {
    }
    BreadcrumComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BreadcrumComponent.prototype, "breadcrums", void 0);
    BreadcrumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrum',
            template: __webpack_require__(/*! ./breadcrum.component.html */ "./src/app/shared/components/breadcrum/breadcrum.component.html"),
            styles: [__webpack_require__(/*! ./breadcrum.component.scss */ "./src/app/shared/components/breadcrum/breadcrum.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumComponent);
    return BreadcrumComponent;
}());



/***/ }),

/***/ "./src/app/shared/model/breadcrum.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/model/breadcrum.ts ***!
  \*******************************************/
/*! exports provided: Breadcrum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrum", function() { return Breadcrum; });
var Breadcrum = /** @class */ (function () {
    function Breadcrum(title, url) {
        this.title = title;
        this.url = url;
    }
    return Breadcrum;
}());



/***/ }),

/***/ "./src/app/shared/service/breadcrum.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/service/breadcrum.service.ts ***!
  \*****************************************************/
/*! exports provided: BreadcrumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumService", function() { return BreadcrumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BreadcrumService = /** @class */ (function () {
    function BreadcrumService() {
        this.breadcrums = [];
    }
    BreadcrumService.prototype.setBreadcrum = function (breadcrums) {
        var _a;
        this.breadcrums.length = 0;
        (_a = this.breadcrums).push.apply(_a, breadcrums);
    };
    BreadcrumService.prototype.addBreadCrum = function (breadcrum) {
        this.breadcrums.push(breadcrum);
    };
    BreadcrumService.prototype.getBreadcrum = function () {
        return this.breadcrums;
    };
    BreadcrumService.prototype.shouldShow = function () {
        return this.breadcrums.length > 0;
    };
    BreadcrumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumService);
    return BreadcrumService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-categories-categories-module.js.map