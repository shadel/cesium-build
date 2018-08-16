(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("powerbi-client"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["powerbi-client", "react"], factory);
	else if(typeof exports === 'object')
		exports["react-powerbi-client"] = factory(require("powerbi-client"), require("react"));
	else
		root["react-powerbi-client"] = factory(root["powerbi-client"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_powerbi_client__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/react-powerbi.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/powerbi-report/component.tsx":
/*!*****************************************************!*\
  !*** ./src/components/powerbi-report/component.tsx ***!
  \*****************************************************/
/*! exports provided: Report, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var powerbi_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! powerbi-client */ "powerbi-client");
/* harmony import */ var powerbi_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(powerbi_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./src/util.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Report = /** @class */ (function (_super) {
    __extends(Report, _super);
    function Report(props) {
        var _this = _super.call(this, props) || this;
        _this.component = null;
        _this.state = {
            type: 'report'
        };
        return _this;
    }
    Report.prototype.componentDidMount = function () {
        this.updateState(this.props);
    };
    Report.prototype.componentWillReceiveProps = function (nextProps) {
        this.updateState(nextProps);
    };
    Report.prototype.componentDidUpdate = function () {
        if (this.validateConfig(this.state)) {
            this.embed(this.state);
        }
    };
    Report.prototype.componentWillUnmount = function () {
        this.reset();
    };
    Report.prototype.embed = function (config) {
        this.component = powerbi.embed(this.rootElement, config);
        if (this.props.onEmbedded) {
            this.props.onEmbedded(this.component);
        }
        return this.component;
    };
    Report.prototype.reset = function () {
        powerbi.reset(this.rootElement);
        this.component = null;
    };
    Report.prototype.updateState = function (props) {
        var nextState = _util__WEBPACK_IMPORTED_MODULE_2__["assign"]({}, this.state, props, {
            settings: {
                filterPaneEnabled: this.props.filterPaneEnabled,
                navContentPaneEnabled: this.props.navContentPaneEnabled
            }
        });
        /**
         * This property must be removed from the state object so that it doesn't get used in the embedConfig.
         * This would be passed to `powerbi.embed(element, embedConfig)` and attempted to be sent over postMessage;
         * however, functions cannot be cloned and it will fail.
         */
        delete nextState.onEmbedded;
        this.setState(nextState);
    };
    Report.prototype.validateConfig = function (config) {
        var errors = powerbi_client__WEBPACK_IMPORTED_MODULE_1__["models"].validateReportLoad(config);
        return (errors === undefined);
    };
    Report.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "powerbi-frame", ref: function (ref) { return _this.rootElement = ref; } }));
    };
    return Report;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

// Report.propTypes = {
//   accessToken: React.PropTypes.string,
//   embedUrl: React.PropTypes.string
// }
/* harmony default export */ __webpack_exports__["default"] = (Report);


/***/ }),

/***/ "./src/react-powerbi.ts":
/*!******************************!*\
  !*** ./src/react-powerbi.ts ***!
  \******************************/
/*! exports provided: Report */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_powerbi_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/powerbi-report/component */ "./src/components/powerbi-report/component.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return _components_powerbi_report_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: assign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// TODO: replace in favor of using polyfill
/**
 * Copies the values of all enumerable properties from one or more source objects to a target object, and returns the target object.
 */
function assign() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var target = args[0];
    'use strict';
    if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var output = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
            for (var nextKey in source) {
                if (source.hasOwnProperty(nextKey)) {
                    output[nextKey] = source[nextKey];
                }
            }
        }
    }
    return output;
}


/***/ }),

/***/ "powerbi-client":
/*!*********************************!*\
  !*** external "powerbi-client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_powerbi_client__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=react-powerbi.js.map