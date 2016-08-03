/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	System.register(["toastr"], function(exports_1, context_1) {
	    "use strict";
	    var __moduleName = context_1 && context_1.id;
	    var toastr;
	    var Greeter;
	    return {
	        setters:[
	            function (toastr_1) {
	                toastr = toastr_1;
	            }],
	        execute: function() {
	            Greeter = (function () {
	                function Greeter(element) {
	                    this.element = element;
	                    this.element.innerHTML += "The time is: ";
	                    this.span = document.createElement('span');
	                    this.element.appendChild(this.span);
	                    this.span.innerText = new Date().toUTCString();
	                }
	                Greeter.prototype.start = function () {
	                    var _this = this;
	                    this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
	                };
	                Greeter.prototype.stop = function () {
	                    clearTimeout(this.timerToken);
	                };
	                return Greeter;
	            }());
	            window.onload = function () {
	                var el = document.getElementById('content');
	                var greeter = new Greeter(el);
	                greeter.start();
	                toastr.success("here");
	            };
	        }
	    }
	});
	//# sourceMappingURL=app.js.map

/***/ }
/******/ ]);