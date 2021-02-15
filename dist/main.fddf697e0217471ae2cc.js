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

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site */ \"./src/app/site.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./src/app/model.js\");\n\n\n\nconst $site = document.querySelector('.site')\nconst btns = document.querySelectorAll('#btn')\n\nbtns.forEach(btn => {\n  const type = btn.getAttribute('data-type')\n  const currentInput = document.querySelector(type)\n\n  const styles = btn.getAttribute('data-styles')\n  const currentStyles = document.querySelector(styles)\n\n\n  btn.addEventListener('click', () => {\n    if(currentInput.value === ''){\n      alert('Заполните значения')\n    } else {\n      _model__WEBPACK_IMPORTED_MODULE_1__.model.splice(0, 1)\n      _model__WEBPACK_IMPORTED_MODULE_1__.model.push({type: type.replace('#', ''), value: currentInput.value, styles: currentStyles.value})\n      currentInput.value = ''\n      currentStyles.value = ''\n      ;(0,_site__WEBPACK_IMPORTED_MODULE_0__.site)($site)\n    }\n  })\n})\n\n//# sourceURL=webpack://webcon/./src/app/index.js?");

/***/ }),

/***/ "./src/app/model.js":
/*!**************************!*\
  !*** ./src/app/model.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"model\": () => (/* binding */ model)\n/* harmony export */ });\nconst model = []\n\n//# sourceURL=webpack://webcon/./src/app/model.js?");

/***/ }),

/***/ "./src/app/site.js":
/*!*************************!*\
  !*** ./src/app/site.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"site\": () => (/* binding */ site)\n/* harmony export */ });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/app/model.js\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ \"./src/app/templates.js\");\n\n\n\nfunction site(site) {\n  _model__WEBPACK_IMPORTED_MODULE_0__.model.forEach(block => {\n    let html = _templates__WEBPACK_IMPORTED_MODULE_1__.templates[block.type];\n    if (html) {\n      site.insertAdjacentHTML('beforeend', html(block))\n    }\n  })\n}\n\n//# sourceURL=webpack://webcon/./src/app/site.js?");

/***/ }),

/***/ "./src/app/templates.js":
/*!******************************!*\
  !*** ./src/app/templates.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"templates\": () => (/* binding */ templates)\n/* harmony export */ });\nfunction title(block) {\n  return `<h2 style=\"${block.styles}\">${block.value}</h2>`\n}\nfunction text(block) {\n  return `<p style=\"${block.styles}\">${block.value}</p>`\n}\n\n\nconst templates = {\n  title,\n  text\n}\n\n//# sourceURL=webpack://webcon/./src/app/templates.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;