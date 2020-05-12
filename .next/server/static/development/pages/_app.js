module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/configureStore */ "./redux/configureStore.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/andrey/programming/projects/TraineeProject/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const store = Object(_redux_configureStore__WEBPACK_IMPORTED_MODULE_2__["default"])();

function MyApp({
  Component,
  pageProps
}) {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 36
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./redux/actionCreators/userDataActionCreators.ts":
/*!********************************************************!*\
  !*** ./redux/actionCreators/userDataActionCreators.ts ***!
  \********************************************************/
/*! exports provided: setUserData, setUserDataIntoStore, logOut, logOutStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserData", function() { return setUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserDataIntoStore", function() { return setUserDataIntoStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOutStore", function() { return logOutStore; });
/* harmony import */ var _actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/userDataActionType */ "./redux/actionTypes/userDataActionType.ts");

function setUserData(payload) {
  return {
    payload,
    type: _actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_0__["SET_USER_DATA_AUTH"]
  };
}
function setUserDataIntoStore(payload) {
  return {
    payload,
    type: _actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_0__["SET_USER_DATA_AUTH_STORE"]
  };
}
function logOut() {
  return {
    type: _actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]
  };
}
function logOutStore() {
  return {
    type: _actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_STORE"]
  };
}

/***/ }),

/***/ "./redux/actionTypes/userDataActionType.ts":
/*!*************************************************!*\
  !*** ./redux/actionTypes/userDataActionType.ts ***!
  \*************************************************/
/*! exports provided: SET_USER_DATA_AUTH, SET_USER_DATA_AUTH_STORE, LOGOUT, LOGOUT_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_DATA_AUTH", function() { return SET_USER_DATA_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_DATA_AUTH_STORE", function() { return SET_USER_DATA_AUTH_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_STORE", function() { return LOGOUT_STORE; });
const SET_USER_DATA_AUTH = 'SET_USER_DATA_AUTH';
const SET_USER_DATA_AUTH_STORE = 'SET_USER_DATA_AUTH_STORE';
const LOGOUT = 'LOGOUT';
const LOGOUT_STORE = 'LOGOUT_STORE';

/***/ }),

/***/ "./redux/configureStore.ts":
/*!*********************************!*\
  !*** ./redux/configureStore.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers/rootReducer */ "./redux/reducers/rootReducer.ts");
/* harmony import */ var _saga_rootSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saga/rootSaga */ "./redux/saga/rootSaga.ts");





const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();

const configureStore = () => {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_redux_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware)));
  sagaMiddleware.run(_saga_rootSaga__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./redux/reducers/rootReducer.ts":
/*!***************************************!*\
  !*** ./redux/reducers/rootReducer.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userData */ "./redux/reducers/userData.ts");


const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  userData: _userData__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/reducers/userData.ts":
/*!************************************!*\
  !*** ./redux/reducers/userData.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userDataReducer; });
/* harmony import */ var _actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/userDataActionType */ "./redux/actionTypes/userDataActionType.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


const userDataCookie = js_cookie__WEBPACK_IMPORTED_MODULE_1__["get"]('userData');
const initialState = {
  userData: {
    name: typeof userDataCookie === 'string' ? JSON.parse(userDataCookie).name : '',
    avatar: typeof userDataCookie === 'string' ? JSON.parse(userDataCookie).avatar : ''
  }
};
function userDataReducer(state = initialState, action) {
  console.log();

  switch (action.type) {
    case 'Hello':
      return {
        userData: {
          name: 'Andrey'
        }
      };

    case _actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_0__["SET_USER_DATA_AUTH_STORE"]:
      return {
        userData: action.payload.payload
      };

    case _actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_STORE"]:
      return {
        userData: {
          name: '',
          avatar: ''
        }
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/saga/dataUser/watchDataUser.ts":
/*!**********************************************!*\
  !*** ./redux/saga/dataUser/watchDataUser.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return watchDataUser; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _workerDataUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workerDataUser */ "./redux/saga/dataUser/workerDataUser.ts");
/* harmony import */ var _actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actionTypes/userDataActionType */ "./redux/actionTypes/userDataActionType.ts");



function* watchDataUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])('HELLO', _workerDataUser__WEBPACK_IMPORTED_MODULE_1__["sayHello"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_2__["SET_USER_DATA_AUTH"], _workerDataUser__WEBPACK_IMPORTED_MODULE_1__["setUserAuthData"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_2__["LOGOUT"], _workerDataUser__WEBPACK_IMPORTED_MODULE_1__["logOut"]);
}

/***/ }),

/***/ "./redux/saga/dataUser/workerDataUser.ts":
/*!***********************************************!*\
  !*** ./redux/saga/dataUser/workerDataUser.ts ***!
  \***********************************************/
/*! exports provided: sayHello, setUserAuthData, logOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sayHello", function() { return sayHello; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserAuthData", function() { return setUserAuthData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionCreators_userDataActionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actionCreators/userDataActionCreators */ "./redux/actionCreators/userDataActionCreators.ts");


function* sayHello() {
  yield console.log('HELLO');
}
function* setUserAuthData(payload) {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actionCreators_userDataActionCreators__WEBPACK_IMPORTED_MODULE_1__["setUserDataIntoStore"](payload));
}
function* logOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actionCreators_userDataActionCreators__WEBPACK_IMPORTED_MODULE_1__["logOutStore"]());
}

/***/ }),

/***/ "./redux/saga/rootSaga.ts":
/*!********************************!*\
  !*** ./redux/saga/rootSaga.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dataUser_watchDataUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataUser/watchDataUser */ "./redux/saga/dataUser/watchDataUser.ts");


const sagas = [_dataUser_watchDataUser__WEBPACK_IMPORTED_MODULE_1__["default"]];
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])(sagas.map(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"]));
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map