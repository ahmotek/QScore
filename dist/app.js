/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/components/tab.js */ \"./src/js/components/tab.js\");\n/* harmony import */ var _js_components_tab_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_components_tab_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_components_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/components/slider.js */ \"./src/js/components/slider.js\");\n/* harmony import */ var _js_components_slider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_components_slider_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_components_responsive_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/components/responsive-ui.js */ \"./src/js/components/responsive-ui.js\");\n/* harmony import */ var _js_components_responsive_ui_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_components_responsive_ui_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_components_loadEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/components/loadEvent.js */ \"./src/js/components/loadEvent.js\");\n/* harmony import */ var _js_components_loadEvent_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_components_loadEvent_js__WEBPACK_IMPORTED_MODULE_4__);\n// import SCSS main partial\n // import JS partials\n\n\n\n\n\nconsole.log(\"Hello World from your main file!\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/loadEvent.js":
/*!****************************************!*\
  !*** ./src/js/components/loadEvent.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/js/components/loadEvent.js?");

/***/ }),

/***/ "./src/js/components/responsive-ui.js":
/*!********************************************!*\
  !*** ./src/js/components/responsive-ui.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// JS partial to control responsiveness of the form\n\n//# sourceURL=webpack:///./src/js/components/responsive-ui.js?");

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// SLIDER partial \nvar slideNav = document.getElementById('slideNavigation');\nvar slideItem = document.querySelectorAll('.slide-item');\nvar nextButton = document.querySelector('.js-next');\nvar prevButton = document.querySelector('.js-prev');\nvar threshold = 200;\nvar slider = document.getElementById('slideContainer');\n\nvar getActiveElement = function getActiveElement() {\n  // slideItem = document.querySelectorAll('.slide-item');\n  var active = 0;\n\n  for (var i = 0; i < slideItem.length; i++) {\n    var item = slideItem[i];\n\n    if (item.classList.contains('is-active')) {\n      active = i;\n    }\n  }\n\n  var activeElement = slideItem[active];\n  return {\n    element: activeElement,\n    index: active\n  };\n};\n\nvar bulletClick = function bulletClick(event) {\n  var bullets = document.querySelectorAll('.slide-navigation__item');\n  var clickedBullet = event.target;\n  var clickedIndex = Array.prototype.indexOf.call(bullets, clickedBullet);\n  var activeBullet = document.querySelector('.slide-navigation__item.is-active');\n  activeBullet.classList.remove('is-active');\n  clickedBullet.classList.add('is-active');\n  removeClassesByPrefix(slider, 'slide-');\n  goToSlide(clickedIndex);\n};\n\nvar addBullet = function addBullet() {\n  var length = slideItem.length;\n  var activeIndex = getActiveElement().index;\n  var bulletContainer = document.getElementById('slideNavigation');\n  ;\n\n  for (var i = 0; i < length; i++) {\n    var el = document.createElement('span');\n    el.classList.add('slide-navigation__item');\n\n    if (i === activeIndex) {\n      el.classList.add('is-active');\n    }\n\n    var addedElement = bulletContainer.appendChild(el);\n    addedElement.addEventListener('click', bulletClick);\n  }\n};\n\naddBullet();\n\nvar getFollowingElement = function getFollowingElement(active, prev) {\n  // slideItem = document.querySelectorAll('.slide-item');\n  var index = active + (prev ? -1 : 1);\n\n  if (active == 0 && prev) {\n    index = slideItem.length - 1;\n  } else if (active == slideItem.length - 1 && !prev) {\n    index = 0;\n  }\n\n  return {\n    element: slideItem[index],\n    index: index\n  };\n};\n\nvar goToSlide = function goToSlide(index) {\n  // slideItem = document.querySelectorAll('.slide-item');\n  var active = getActiveElement();\n  var activeElement = active.element;\n  var activeIndex = active.index;\n  activeElement.classList.remove('is-active');\n  var following = slideItem[index];\n  following.classList.add('is-active');\n  document.querySelector('.slide-navigation__item.is-active').classList.remove('is-active'); //- add index Nº class to parent\n\n  console.log(index);\n  slider.classList.add('slide-' + Number(index + 1));\n  var bullet = document.querySelectorAll('.slide-navigation__item');\n  bullet[index].classList.add('is-active');\n\n  if (index === 0) {\n    prevButton.classList.add('is-disabled');\n    prevButton.disabled = true;\n  } else {\n    prevButton.classList.remove('is-disabled');\n  }\n\n  if (index === 2) {\n    nextButton.classList.add('is-disabled');\n    nextButton.disabled = true;\n  } else {\n    nextButton.classList.remove('is-disabled');\n  }\n\n  if (activeIndex != 0) {}\n\n  if (activeIndex != 2) {}\n};\n\nvar move = function move(prev) {\n  var active = getActiveElement();\n  var activeIndex = active.index;\n  var following = getFollowingElement(activeIndex, prev);\n  removeClassesByPrefix(slider, 'slide-');\n  goToSlide(following.index);\n};\n\nnextButton.addEventListener('click', function () {\n  move();\n});\nprevButton.addEventListener('click', function () {\n  move(true);\n});\n\nfunction removeClassesByPrefix(el, prefix) {\n  for (var i = el.classList.length - 1; i >= 0; i--) {\n    if (el.classList[i].startsWith(prefix)) {\n      el.classList.remove(el.classList[i]);\n    }\n  }\n}\n\nfunction listenOnLoaded() {\n  var active = getActiveElement();\n  var activeIndex = active.index;\n  console.log(activeIndex);\n  slider.classList.add('slide-' + Number(activeIndex + 1));\n}\n\ndocument.addEventListener('DOMContentLoaded', listenOnLoaded);\n\n//# sourceURL=webpack:///./src/js/components/slider.js?");

/***/ }),

/***/ "./src/js/components/tab.js":
/*!**********************************!*\
  !*** ./src/js/components/tab.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var tabNav = document.getElementById('TabNavigation'); // Event Listeners\n\ntabNav.addEventListener('click', function (e) {\n  var target = e.target;\n  console.log(target);\n  selectItem(target);\n}); // Assign is-active class to clicked item\n\nfunction selectItem(el) {\n  // console.log(el.classList);\n  if (el && el.classList.contains('js-nav-item')) {\n    var menuItems = el.parentElement.children; // console.log(menuItems); // HTMLCollection\n\n    for (var i = 0; i < menuItems.length; i++) {\n      if (menuItems[i].classList.contains('is-active')) {\n        // console.log(menuItems[i]);\n        menuItems[i].classList.remove('is-active');\n      }\n\n      el.classList.add('is-active');\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/js/components/tab.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });