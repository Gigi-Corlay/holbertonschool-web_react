/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts"
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Cpp */ \"./js/subjects/Cpp.ts\");\n/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/Java */ \"./js/subjects/Java.ts\");\n/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/React */ \"./js/subjects/React.ts\");\n\n\n\n// Création d'un professeur\nvar teacher = {\n    firstName: \"John\",\n    lastName: \"Doe\",\n    experienceTeachingC: 3,\n    experienceTeachingJava: 5,\n};\n// Cpp\nvar cpp = new _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__.Cpp();\ncpp.setTeacher = teacher;\nconsole.log(cpp.getRequirements());\nconsole.log(cpp.getAvailableTeacher());\n// Java\nvar java = new _subjects_Java__WEBPACK_IMPORTED_MODULE_1__.Java();\njava.setTeacher = teacher;\nconsole.log(java.getRequirements());\nconsole.log(java.getAvailableTeacher());\n// React\nvar react = new _subjects_React__WEBPACK_IMPORTED_MODULE_2__.React();\nreact.setTeacher = teacher;\nconsole.log(react.getRequirements());\nconsole.log(react.getAvailableTeacher());\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/main.ts?\n}");

/***/ },

/***/ "./js/subjects/Cpp.ts"
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cpp: () => (/* binding */ Cpp)\n/* harmony export */ });\n/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ \"./js/subjects/Subject.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Cpp = /** @class */ (function (_super) {\n    __extends(Cpp, _super);\n    function Cpp() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Cpp.prototype.getRequirements = function () {\n        return \"Here is the list of requirements for Cpp\";\n    };\n    Cpp.prototype.getAvailableTeacher = function () {\n        if (this.teacher.experienceTeachingC) {\n            return \"Available Teacher: \".concat(this.teacher.firstName);\n        }\n        return \"No available teacher\";\n    };\n    return Cpp;\n}(_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject));\n\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/subjects/Cpp.ts?\n}");

/***/ },

/***/ "./js/subjects/Java.ts"
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Java: () => (/* binding */ Java)\n/* harmony export */ });\n/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ \"./js/subjects/Subject.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Java = /** @class */ (function (_super) {\n    __extends(Java, _super);\n    function Java() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Java.prototype.getRequirements = function () {\n        return \"Here is the list of requirements for Java\";\n    };\n    Java.prototype.getAvailableTeacher = function () {\n        if (this.teacher.experienceTeachingJava) {\n            return \"Available Teacher: \".concat(this.teacher.firstName);\n        }\n        return \"No available teacher\";\n    };\n    return Java;\n}(_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject));\n\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/subjects/Java.ts?\n}");

/***/ },

/***/ "./js/subjects/React.ts"
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   React: () => (/* binding */ React)\n/* harmony export */ });\n/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ \"./js/subjects/Subject.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar React = /** @class */ (function (_super) {\n    __extends(React, _super);\n    function React() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    React.prototype.getRequirements = function () {\n        return \"Here is the list of requirements for React\";\n    };\n    React.prototype.getAvailableTeacher = function () {\n        if (this.teacher.experienceTeachingReact) {\n            return \"Available Teacher: \".concat(this.teacher.firstName);\n        }\n        return \"No available teacher\";\n    };\n    return React;\n}(_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject));\n\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/subjects/React.ts?\n}");

/***/ },

/***/ "./js/subjects/Subject.ts"
/*!********************************!*\
  !*** ./js/subjects/Subject.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Subject: () => (/* binding */ Subject)\n/* harmony export */ });\nvar Subject = /** @class */ (function () {\n    function Subject() {\n    }\n    Object.defineProperty(Subject.prototype, \"setTeacher\", {\n        set: function (teacher) {\n            this.teacher = teacher;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Subject;\n}());\n\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/subjects/Subject.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.ts");
/******/ 	
/******/ })()
;