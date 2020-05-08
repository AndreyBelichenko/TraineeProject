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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AuthPage/AuthPage.tsx":
/*!******************************************!*\
  !*** ./components/AuthPage/AuthPage.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponent */ "./components/AuthPage/styledComponent.ts");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-facebook-login */ "react-facebook-login");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actionCreators_userDataActionCreators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actionCreators/userDataActionCreators */ "./redux/actionCreators/userDataActionCreators.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/andrey/programming/projects/templateNext/components/AuthPage/AuthPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];








const AuthPage = props => {
  const responseGoogle = response => {
    console.log("response google", response);
    let dataToSend = {
      name: response.profileObj.name,
      avatar: response.profileObj.imageUrl
    };
    props.setUserData(dataToSend);
    dataToSend.name ? next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/list') : null;
  };

  const responseFacebook = response => {
    console.log("response facebook", response);

    if (response.accessToken) {
      let dataToSend = {
        name: response.name,
        avatar: response.picture.data.url
      };
      props.setUserData(dataToSend);
      dataToSend.name ? next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/list') : null;
    }
  };

  return __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["AuthMain"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["HeaderStyled"], {
    block: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_2___default.a, {
    clientId: "411912187634-09e2pudtp337atlucsnlfaeb13ie4ntj.apps.googleusercontent.com",
    buttonText: "",
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: 'single_host_origin',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_3___default.a, {
    appId: "263020944839635" // autoLoad={false}
    ,
    textButton: "",
    fields: "name,email,picture",
    onClick: responseFacebook,
    callback: responseFacebook,
    icon: "fa-facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  })), __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["AuthContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["AuthContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  })));
};

const mapDispatchToProps = dispatch => ({
  setUserData: payload => dispatch(Object(_redux_actionCreators_userDataActionCreators__WEBPACK_IMPORTED_MODULE_5__["setUserData"])(payload))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, mapDispatchToProps)(AuthPage));

/***/ }),

/***/ "./components/AuthPage/styledComponent.ts":
/*!************************************************!*\
  !*** ./components/AuthPage/styledComponent.ts ***!
  \************************************************/
/*! exports provided: AuthMain, AuthContentWrapper, AuthContent, HeaderStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthMain", function() { return AuthMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContentWrapper", function() { return AuthContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContent", function() { return AuthContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStyled", function() { return HeaderStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const AuthMain = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;
const AuthContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background: blue;
`;
const AuthContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 80%;
    height: 100%;
    background: white;
`;
const HeaderStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"])({
  margin: '0!important',
  display: 'flex',
  justifyContent: 'flex-end'
});

/***/ }),

/***/ "./pages/auth.tsx":
/*!************************!*\
  !*** ./pages/auth.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AuthPage/AuthPage */ "./components/AuthPage/AuthPage.tsx");
var _jsxFileName = "/home/andrey/programming/projects/templateNext/pages/auth.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
// import * as React from 'react';
// import Router from 'next/router'
//
// const Auth: React.FC = () => <h1 onClick={() => Router.push('/')}>Auth</h1>;
//
// export default Auth;



const Auth = () => __jsx(_components_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 31
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./pages/auth.tsx");
var _jsxFileName = "/home/andrey/programming/projects/templateNext/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
// import * as React from 'react';
// import ListComponent from './List';
// import styled from 'styled-components';
//
// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
//
// const App: React.FC = () => (
//     <Container>
//         <ListComponent />
//     </Container>
// );
//
// export default App;



const App = () => __jsx(_auth__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 29
  }
});

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./redux/actionCreators/userDataActionCreators.ts":
/*!********************************************************!*\
  !*** ./redux/actionCreators/userDataActionCreators.ts ***!
  \********************************************************/
/*! exports provided: setUserData, setUserDataIntoStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserData", function() { return setUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserDataIntoStore", function() { return setUserDataIntoStore; });
/* harmony import */ var _actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/userDataActionType */ "./redux/actionTypes/userDataActionType.ts");

function setUserData(payload) {
  return {
    type: _actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_0__["SET_USER_DATA_AUTH"],
    payload: payload
  };
}
function setUserDataIntoStore(payload) {
  return {
    type: _actionTypes_userDataActionType__WEBPACK_IMPORTED_MODULE_0__["SET_USER_DATA_AUTH_STORE"],
    payload: payload
  };
}

/***/ }),

/***/ "./redux/actionTypes/userDataActionType.ts":
/*!*************************************************!*\
  !*** ./redux/actionTypes/userDataActionType.ts ***!
  \*************************************************/
/*! exports provided: SET_LYRICS, SET_USER_DATA_AUTH, SET_USER_DATA_AUTH_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LYRICS", function() { return SET_LYRICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_DATA_AUTH", function() { return SET_USER_DATA_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_DATA_AUTH_STORE", function() { return SET_USER_DATA_AUTH_STORE; });
const SET_LYRICS = "lyricsActionTypes/SET_LYRICS";
const SET_USER_DATA_AUTH = "SET_USER_DATA_AUTH";
const SET_USER_DATA_AUTH_STORE = "SET_USER_DATA_AUTH_STORE";

/***/ }),

/***/ 6:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andrey/programming/projects/templateNext/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-facebook-login":
/*!***************************************!*\
  !*** external "react-facebook-login" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-facebook-login");

/***/ }),

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map