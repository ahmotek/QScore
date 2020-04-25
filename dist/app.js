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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_loadProducts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/components/loadProducts.js */ \"./src/js/components/loadProducts.js\");\n/* harmony import */ var _js_components_loadProducts_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_components_loadProducts_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_components_cloneProducts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/components/cloneProducts.js */ \"./src/js/components/cloneProducts.js\");\n/* harmony import */ var _js_components_cloneProducts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_components_cloneProducts_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_components_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/components/slider.js */ \"./src/js/components/slider.js\");\n/* harmony import */ var _js_components_slider_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_components_slider_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_components_tab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/components/tab.js */ \"./src/js/components/tab.js\");\n/* harmony import */ var _js_components_tab_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_components_tab_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_resizing_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/resizing.js */ \"./src/js/components/resizing.js\");\n/* harmony import */ var _components_resizing_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_resizing_js__WEBPACK_IMPORTED_MODULE_5__);\n// import SCSS main partial\n // import JS partials - Order matters!!\n\n\n\n\n //- empty files\n\n\nconsole.log(\"Hello world!\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/cloneProducts.js":
/*!********************************************!*\
  !*** ./src/js/components/cloneProducts.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import paginationItem from './slider.js';\nconsole.log('## 2. Clone Products - Slide Item'); // TODO: Optimise with loop\n\nfunction cloneSlideItem() {\n  // console.log('cloneSlideItem()');\n  // slide parent element to append to.\n  var slide = document.getElementById('slideContainer'); // slideItem[0] element to clone\n\n  var slideItem = document.getElementById('slideItem'); // ## Clone slideItem[1] and its child nodes\n\n  var slideItem1 = slideItem.cloneNode(true); // Assign a different ID to cloned element\n\n  slideItem1.id = 'slideItem1'; // Cloned element \n  // console.log(slideItem1);\n  // Change TabNav ID for slideItem1\n  // console.log(slideItem1.firstChild.nextElementSibling);\n  // let tabNav1 = slideItem1.firstChild.nextElementSibling;\n  // console.log(tabNav1.id);\n  // tabNav1.id = 'TabNav1';\n  // Append cloned slideItem to slide\n\n  slide.appendChild(slideItem1); // ## Clone slideItem[2] and its child nodes\n\n  var slideItem2 = slideItem.cloneNode(true); // Assign a different ID to cloned element\n\n  slideItem2.id = 'slideItem2'; // Change TabNav ID for slideItem1\n  // console.log(slideItem2.firstChild.nextElementSibling);\n  // let tabNav2 = slideItem2.firstChild.nextElementSibling;\n  // console.log(tabNav2.id);\n  // tabNav2.id = 'TabNav2';\n  // Append cloned slideItem to slide\n\n  slide.appendChild(slideItem2);\n}\n\ncloneSlideItem(); // paginationItem();\n// document.addEventListener('DOMContentLoaded', cloneSlideItem);\n\n//# sourceURL=webpack:///./src/js/components/cloneProducts.js?");

/***/ }),

/***/ "./src/js/components/loadProducts.js":
/*!*******************************************!*\
  !*** ./src/js/components/loadProducts.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import paginationItem from './slider.js';\nconsole.log('## 1. Load Products from json');\n\nfunction loadProducts() {\n  console.log('load products function');\n  var imagePath = 'src/assets/images'; // Initiate object XMLHttpRequest() from native object\n\n  var xhr = new XMLHttpRequest(); // open() Method - opens conexion with the server, accepting the following parameters: \n  // 1. the type of request (GET); 2. the file we want to reach (customer.json); 3. asynchronous = true;\n\n  xhr.open('GET', 'src/json/products.json', true); // onload() - checks conexion status and manipulate data\n\n  xhr.onload = function () {\n    // Test HTTP request Status\n    // HTTP STATUSES: https://httpstatuses.com/\n    // 200: \"OK\"\n    // 403: \"Forbiden\"\n    // 404: \"Not Found\"\n    // this = xhr Object\n    if (this.status === 200) {\n      // console.log(this.responseText); // check if gets the json data\n      // parse it as the object products\n      var products = JSON.parse(this.responseText); // Check products & products.length\n\n      console.log(products);\n      console.log(products.length); // 3\n      // output products array within a loop\n\n      var slideItemOutput = '';\n      products.forEach(function (product) {\n        // console.log(product.id);\n        // console.log(product.name); \n        // Calculate Savings\n        var calculateSavings = function calculateSavings(productRegularPrice, productNewPrice) {\n          console.log(productRegularPrice);\n          console.log(productNewPrice);\n          var savingsVal = productRegularPrice - productNewPrice;\n          return savingsVal;\n        };\n\n        calculateSavings(product.regularPrice, product.newPrice);\n        console.log(calculateSavings(product.regularPrice, product.newPrice)); // TODO: Split number of newPrice\n        // https://stackoverflow.com/questions/9098776/how-to-split-a-decimal-by-its-dot-into-integers-using-javascript\n\n        var splitNewPrice = function splitNewPrice(newPrice) {\n          var newPriceToSplit = newPrice;\n          var newPriceToString = newPriceToSplit.toString();\n          var newPriceArray = newPriceToString.split('.');\n          var newPriceSplited = new Array();\n          newPriceSplited = newPriceArray; // console.log(newPriceSplited[0], newPriceSplited[1])\n\n          var newPriceNode = \"<span class=\\\"price__integer\\\">\".concat(newPriceSplited[0], \"</span>.<span\\n          class=\\\"price__decimals\\\">\").concat(newPriceSplited[1], \"</span>\");\n          return newPriceNode;\n        }; // splitNewPrice(product.newPrice);\n        // console.log(splitNewPrice(product.newPrice));\n\n\n        slideItemOutput += \"\\n          <div id=\\\"slideItem\".concat(product.id, \"\\\" class=\\\"slide-item\\\">\\n            <ul id=\\\"TabNav\").concat(product.id, \"\\\" class=\\\"tab-nav js-nav\\\">\\n              <li class=\\\"tab-nav__item js-nav-item is-active\\\" data-product=\\\"prod\").concat(products[0].id, \"\\\">\").concat(products[0].name, \"</li>\\n              <li class=\\\"tab-nav__item js-nav-item\\\" data-product=\\\"prod\").concat(products[1].id, \"\\\">\").concat(products[1].name, \"</li>\\n              <li class=\\\"tab-nav__item js-nav-item\\\" data-product=\\\"prod\").concat(products[2].id, \"\\\">\").concat(products[2].name, \"</li>\\n            </ul>\\n            <img src=\\\"\").concat(imagePath, \"/\").concat(product.imageName, \"\\\" class=\\\"product-image\\\" alt=\\\"Energy renew dietary supplement \").concat(product.quantity, \" pot\\\">\\n            <div class=\\\"display\\\">\\n              <div class=\\\"display__item\\\">\\n                <div class=\\\"display__item-title\\\">Regular Price:</div>\\n                <div class=\\\"display__item-value display__item-value--neg\\\">\").concat(product.currency).concat(product.regularPrice, \"</div>\\n              </div>\\n              <div class=\\\"display__item hide-small\\\">\\n                <div class=\\\"display__item-title\\\">Today's Discount:</div>\\n                <div class=\\\"display__item-value display__item-value--pos\\\">\").concat(product.currency).concat(product.regularPrice, \"</div>\\n              </div>\\n              <div class=\\\"display__item\\\">\\n                <div class=\\\"display__item-title\\\">Instant Savings:</div>\\n                <div class=\\\"display__item-value display__item-value--pos\\\">\").concat(product.currency).concat(calculateSavings(product.regularPrice, product.newPrice), \"</div>\\n              </div>\\n              <div class=\\\"display__item display__item--shipping\\\">\\n                <div class=\\\"display__item-title\\\">\\n                  <svg class=\\\"icon icon--section-grid\\\">\\n                    <use xlink:href=\\\"/src/assets/images/sprite.svg#SHIPPING\\\" />\\n                  </svg>Shipping:\\n                </div>\\n                <div class=\\\"display__item-value display__item-value--pos\\\">FREE</div>\\n              </div>\\n            </div>\\n            <div class=\\\"price\\\">\\n              <span class=\\\"price__currency\\\">\").concat(product.currency, \"</span>\").concat(splitNewPrice(product.newPrice), \"\\n            </div>\\n            <div class=\\\"price-legend\\\">(This is a one time payment)</div>\\n          </div>\\n        \");\n        console.log(slideItemOutput);\n      });\n      document.getElementById('slideContainer').innerHTML = slideItemOutput;\n    }\n  };\n\n  xhr.onerror = function () {\n    console.log('request error...');\n  }; // send() - to receive data\n\n\n  xhr.send();\n}\n\nloadProducts(); // document.addEventListener('DOMContentLoaded', loadProducts);\n\n//# sourceURL=webpack:///./src/js/components/loadProducts.js?");

/***/ }),

/***/ "./src/js/components/resizing.js":
/*!***************************************!*\
  !*** ./src/js/components/resizing.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// console.log('## On Resizing - empty');\n// JS partial to control responsiveness of the form\n// following https://stackoverflow.com/questions/45905160/javascript-on-window-resize-end\n// function debounce(func){\n//   console.log('debounce()');\n//   var timer;\n//   return function(event){\n//     if(timer) clearTimeout(timer);\n//     timer = setTimeout(func,100,event);\n//   };\n// }\n// window.addEventListener('resize',debounce(function(e){\n//   console.log('end of resizing');\n//   // let windowWidth = window.innerWidth;\n//   // let windowHeight = window.innerHeight;\n//   // console.log(windowWidth + ' X ' + windowHeight);\n//   // console.log(typeof(windowWidth) + ' X ' + typeof(windowHeight));\n//   // if(windowWidth <= 768) {\n//   //   console.log('#### I\\'m on mobile view');\n//   //   cloneSlideItem();\n//   // } else {\n//   //   console.log('#### I\\'m on desktop view');\n//     // deleteSlideItem();\n//   // }\n// }));\n\n//# sourceURL=webpack:///./src/js/components/resizing.js?");

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('## 3. Slider UI and Functionality');\nvar slideNav = document.getElementById('slideNavigation');\nvar slideItem = document.querySelectorAll('.slide-item');\nvar buttonNext = document.querySelector('.js-next');\nvar buttonPrev = document.querySelector('.js-prev');\nvar threshold = 200;\nvar slider = document.getElementById('slideContainer'); //- getActiveElement var with an anonymous function assigned (Funtion Expression):\n//- 1. set active items to 0\n//- 2. loop through all slideItem.length\n//- 3. reach the item whith .is-active\n//- 4. set active items to i\n//- 5. slideItem index of active index\n//- 6. return activeElement and its index\n\nvar getActiveElement = function getActiveElement() {\n  // console.log('getActiveElement()');\n  var active = 0; // console.log(slideItem.length);\n\n  for (var i = 0; i < slideItem.length; i++) {\n    var item = slideItem[i]; // console.log(item);\n\n    if (item.classList.contains('is-active')) {\n      active = i;\n    }\n  }\n\n  var activeElement = slideItem[active];\n  return {\n    element: activeElement,\n    index: active\n  };\n}; //- paginationItemClick expression with anonymous function:\n//- 1. get all paginationItems\n//- 2. clickedItem: target element\n//- 3. clickedIndex: index of clicked item in paginationItems\n//- 4. select activeItem (before step 5)\n//- 5. activeItem remove active class\n//- 6. clickedItem add active class\n//- 7. call removeClassesByPrefix(); to remove existent slide- classes\n//- 8. call goToSlide() passing clickedIndex val\n\n\nvar paginationItemClick = function paginationItemClick(e) {\n  console.log('paginationItemClick()');\n  var paginationItems = document.querySelectorAll('.slide-navigation__item');\n  var clickedItem = e.target;\n  var clickedIndex = Array.prototype.indexOf.call(paginationItems, clickedItem);\n  var activeItem = document.querySelector('.slide-navigation__item.is-active'); // console.log(paginationItems);\n  // console.log(clickedIndex);\n\n  activeItem.classList.remove('is-active');\n  clickedItem.classList.add('is-active');\n  removeClassesByPrefix(slider, 'slide-');\n  goToSlide(clickedIndex);\n};\n\nvar paginationItem = function paginationItem() {\n  console.log('paginationItem()');\n  var length = slideItem.length;\n  var activeIndex = getActiveElement().index;\n  var paginationItemContainer = document.getElementById('slideNavigation');\n\n  for (var i = 0; i < length; i++) {\n    var el = document.createElement('span');\n    el.classList.add('slide-navigation__item');\n\n    if (i === activeIndex) {\n      el.classList.add('is-active');\n    }\n\n    var addedPaginationItem = paginationItemContainer.appendChild(el);\n    addedPaginationItem.addEventListener('click', paginationItemClick);\n  }\n};\n\nvar getFutureItem = function getFutureItem(active, prev) {\n  console.log('getFutureItem()');\n  var index = active + (prev ? -1 : 1);\n\n  if (active == 0 && prev) {\n    index = slideItem.length - 1;\n  } else if (active == slideItem.length - 1 && !prev) {\n    index = 0;\n  }\n\n  return {\n    element: slideItem[index],\n    index: index\n  };\n};\n\nvar goToSlide = function goToSlide(index) {\n  console.log('goToSlide()');\n  var active = getActiveElement();\n  var activeElement = active.element; // var activeIndex = active.index;\n\n  activeElement.classList.remove('is-active');\n  var futureItem = slideItem[index];\n  futureItem.classList.add('is-active');\n  document.querySelector('.slide-navigation__item.is-active').classList.remove('is-active'); //- To add index Nº class to parent\n  // console.log(index);\n\n  slider.classList.add('slide-' + Number(index + 1)); //- add index to class\n  // Storage paginationItem and assign active class\n\n  var paginationItem = document.querySelectorAll('.slide-navigation__item');\n  paginationItem[index].classList.add('is-active');\n\n  if (index === 0) {\n    buttonPrev.classList.add('is-disabled');\n  } else {\n    buttonPrev.classList.remove('is-disabled');\n  }\n\n  if (index === 2) {\n    buttonNext.classList.add('is-disabled');\n  } else {\n    buttonNext.classList.remove('is-disabled');\n  }\n};\n\nvar arrowButton = function arrowButton(prev) {\n  // console.log('arrowButton()');\n  var active = getActiveElement();\n  var activeIndex = active.index;\n  var futureItem = getFutureItem(activeIndex, prev);\n  removeClassesByPrefix(slider, 'slide-');\n  goToSlide(futureItem.index);\n};\n\nfunction removeClassesByPrefix(el, prefix) {\n  console.log('removeClassesByPrefix()');\n\n  for (var i = el.classList.length - 1; i >= 0; i--) {\n    if (el.classList[i].startsWith(prefix)) {\n      el.classList.remove(el.classList[i]);\n    }\n  }\n}\n\nbuttonNext.addEventListener('click', function () {\n  arrowButton();\n});\nbuttonPrev.addEventListener('click', function () {\n  arrowButton(true);\n});\npaginationItem(); // slider.addEventListener('change', function() {\n//   paginationItem();\n// });\n// export default paginationItem;\n// document.addEventListener('DOMContentLoaded', paginationItem);\n\n//# sourceURL=webpack:///./src/js/components/slider.js?");

/***/ }),

/***/ "./src/js/components/tab.js":
/*!**********************************!*\
  !*** ./src/js/components/tab.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('## 4. Tabs UI and Functionality');\nvar tabNav = document.getElementById('TabNav1');\nvar slider = document.getElementById('slideContainer');\nconsole.log('slideContainer'); // Event Listeners\n\nif (slider) {\n  console.log(slider);\n  slider.addEventListener('click', function (e) {\n    var target = e.target;\n    console.log(target); // Do If checkin the element type\n\n    selectItem(target);\n  });\n} // Assign is-active class to clicked item\n\n\nfunction selectItem(selectItem) {\n  console.log('selectItem()'); // console.log(el.classList);\n\n  if (selectItem && selectItem.classList.contains('js-nav-item')) {\n    var menuItems = selectItem.parentElement.children;\n    console.log(menuItems); // HTMLCollection\n\n    for (var i = 0; i < menuItems.length; i++) {\n      // Remove class from any menuItems\n      if (menuItems[i].classList.contains('is-active')) {\n        console.log(menuItems[i]); // \n\n        menuItems[i].classList.remove('is-active');\n      }\n\n      selectItem.classList.add('is-active');\n      console.log(selectItem);\n      console.log(selectItem.dataset.product);\n\n      if (selectItem.dataset.product === \"prod\".concat(i + 1)) {\n        console.log(\"selectItem.dataset.product === prod\".concat(i + 1));\n        console.log(i);\n        console.log(selectItem);\n        removeClassesByPrefix(slider, 'slide-');\n        slider.classList.add('slide-' + Number(i + 1));\n        var activeSlide = document.getElementById('slideItem' + Number(i + 1));\n        console.log(activeSlide);\n      }\n    }\n  }\n}\n\nfunction removeClassesByPrefix(el, prefix) {\n  console.log('removeClassesByPrefix()');\n\n  for (var i = el.classList.length - 1; i >= 0; i--) {\n    if (el.classList[i].startsWith(prefix)) {\n      el.classList.remove(el.classList[i]);\n    }\n  }\n} // document.addEventListener('DOMContentLoaded', function () {\n// });\n\n//# sourceURL=webpack:///./src/js/components/tab.js?");

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