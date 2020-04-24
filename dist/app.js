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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/components/navigation.js */ \"./src/js/components/navigation.js\");\n/* harmony import */ var _js_components_navigation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_components_navigation_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_components_responsive_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/components/responsive-ui.js */ \"./src/js/components/responsive-ui.js\");\n/* harmony import */ var _js_components_responsive_ui_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_components_responsive_ui_js__WEBPACK_IMPORTED_MODULE_2__);\n// import SCSS main partial\n // import JS partials\n\n\n\nconsole.log(\"Hello World from your main file!\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/navigation.js":
/*!*****************************************!*\
  !*** ./src/js/components/navigation.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// JS partial to control the toggle of the products selector\nvar tabNav = document.getElementById('TabNavigation');\nvar slideNav = document.getElementById('slideNavigation');\nvar elements = document.querySelectorAll('.slide-item');\nvar nextButton = document.querySelector('.js-next');\nvar prevButton = document.querySelector('.js-prev');\nvar threshold = 200;\nvar container = document.getElementById('slideContainer');\n\nvar getActiveElement = function getActiveElement() {\n  elements = document.querySelectorAll('.slide-item');\n  var active = 0;\n\n  for (var i = 0; i < elements.length; i++) {\n    var item = elements[i];\n\n    if (item.classList.contains('is-active')) {\n      active = i;\n    }\n  }\n\n  var activeElement = elements[active];\n  return {\n    element: activeElement,\n    index: active\n  };\n};\n\nvar bulletClick = function bulletClick(event) {\n  var bullets = document.querySelectorAll('.slide-navigation__item');\n  var clickedBullet = event.target;\n  var clickedIndex = Array.prototype.indexOf.call(bullets, clickedBullet);\n  var activeBullet = document.querySelector('.slide-navigation__item.is-active');\n  activeBullet.classList.remove('is-active');\n  clickedBullet.classList.add('is-active');\n  removeClassesByPrefix(container, 'slide-');\n  goToSlide(clickedIndex);\n};\n\nvar addBullet = function addBullet() {\n  var length = elements.length;\n  var activeIndex = getActiveElement().index;\n  var bulletContainer = document.getElementById('slideNavigation');\n  ;\n\n  for (var i = 0; i < length; i++) {\n    var el = document.createElement('div');\n    el.classList.add('slide-navigation__item');\n\n    if (i === activeIndex) {\n      el.classList.add('is-active');\n    }\n\n    var addedElement = bulletContainer.appendChild(el);\n    addedElement.addEventListener('click', bulletClick);\n  } // <span class=\"slide-navigation__item js-nav-item\">\n  //             <input type=\"radio\" id=\"ProdQ1\" class=\"visually-hidden\" name=\"productBundler\" value=\"1\">\n  //           </span>\n\n};\n\naddBullet();\n\nvar getFollowingElement = function getFollowingElement(active, prev) {\n  elements = document.querySelectorAll('.slide-item');\n  var index = active + (prev ? -1 : 1);\n\n  if (active == 0 && prev) {\n    index = elements.length - 1;\n  } else if (active == elements.length - 1 && !prev) {\n    index = 0;\n  }\n\n  return {\n    element: elements[index],\n    index: index\n  };\n};\n\nvar goToSlide = function goToSlide(index) {\n  elements = document.querySelectorAll('.slide-item');\n  var active = getActiveElement();\n  var activeElement = active.element;\n  var activeIndex = active.index;\n  activeElement.classList.remove('is-active');\n  var following = elements[index];\n  following.classList.add('is-active');\n  document.querySelector('.slide-navigation__item.is-active').classList.remove('is-active'); //- add index Nº class to parent\n\n  console.log(index);\n  container.classList.add('slide-' + Number(index + 1));\n  var bullet = document.querySelectorAll('.slide-navigation__item');\n  bullet[index].classList.add('is-active');\n};\n\nvar move = function move(prev) {\n  var active = getActiveElement();\n  var activeIndex = active.index;\n  var following = getFollowingElement(activeIndex, prev);\n  goToSlide(following.index);\n};\n\nnextButton.addEventListener('click', function () {\n  removeClassesByPrefix(container, 'slide-');\n  move();\n});\nprevButton.addEventListener('click', function () {\n  removeClassesByPrefix(container, 'slide-');\n  move(true);\n});\n\nfunction removeClassesByPrefix(el, prefix) {\n  for (var i = el.classList.length - 1; i >= 0; i--) {\n    if (el.classList[i].startsWith(prefix)) {\n      el.classList.remove(el.classList[i]);\n    }\n  }\n} // var isMouseDown = false;\n// var startX = 0;\n// var currentX = 0;\n// var handleMouseDown = function(event) {\n//   if (event.target.classList.contains('control')) {\n//     return;\n//   }\n//   isMouseDown = true;\n//   startX = event.screenX || event.touches[0].clientX;\n//   currentX = event.screenX || event.touches[0].clientX;\n// }\n// var handleMouseUp = function(event) {\n//   isMouseDown = false;\n//   if (\n//     event.target.classList.contains('control') ||\n//     Math.abs(currentX - startX) < threshold\n//   ) {\n//     return;\n//   }\n//   if (startX > currentX) {\n//     move();\n//   } else if (startX < currentX) {\n//     move(true);\n//   }\n//   startX = 0;\n//   currentX = 0;\n// }\n// var handleMouseMove = function(event) {\n//   if (isMouseDown) {\n//     currentX = event.screenX || event.touches[0].clientX;\n//     var active = getActiveElement();\n//     var following = getFollowingElement(active.index, startX < currentX);\n//   }\n// }\n// container.addEventListener('mousedown', handleMouseDown);\n// container.addEventListener('mouseup', handleMouseUp);\n// container.addEventListener('mousemove', handleMouseMove);\n// container.addEventListener('touchstart', handleMouseDown);\n// container.addEventListener('touchend', handleMouseUp);\n// container.addEventListener('touchmove', handleMouseMove);\n// document.addEventListener('dragstart', function (ev) {\n//   if (event.target.classList.contains('slide-item-image')) {\n//     ev.preventDefault();\n//     return;\n//   }\n// })\n// Event Listeners\n\n\ntabNav.addEventListener('click', function (e) {\n  var target = e.target;\n  console.log(target);\n  selectItem(target);\n}); // slideNav.addEventListener('click', function(e) {\n//   let target = e.target;\n//   // console.log(target);\n//   selectItem(target); \n//   arrowsItem(target);\n//   goToSlide();\n//   // get element ID - it has the same value as the for of label\n//   //- on click translateX(calc(-200% - 80px))\n// })\n// function toggleIsActive(item) {\n//   item.classList.toggle(\"is-active\");\n// }\n// Assign is-active class to clicked item\n\nfunction selectItem(el) {\n  // console.log(el.classList);\n  if (el && el.classList.contains('js-nav-item')) {\n    var menuItems = el.parentElement.children; // console.log(menuItems); // HTMLCollection\n\n    for (var i = 0; i < menuItems.length; i++) {\n      if (menuItems[i].classList.contains('is-active')) {\n        // console.log(menuItems[i]);\n        menuItems[i].classList.remove('is-active');\n      }\n\n      el.classList.add('is-active');\n    }\n  }\n} // function arrowsItem(el) {\n//   if(el && el.classList.contains('js-prev')) {\n//     console.log(el);\n//     console.log(true);\n//   }\n//   if(el && el.classList.contains('js-next')) {\n//     console.log(el);\n//     console.log(true);\n//   }\n// }\n\n\nfunction listenOnLoaded() {\n  move();\n}\n\ndocument.addEventListener('DOMContentLoaded', listenOnLoaded);\n\n//# sourceURL=webpack:///./src/js/components/navigation.js?");

/***/ }),

/***/ "./src/js/components/responsive-ui.js":
/*!********************************************!*\
  !*** ./src/js/components/responsive-ui.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// JS partial to control responsiveness of the form\n\n//# sourceURL=webpack:///./src/js/components/responsive-ui.js?");

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