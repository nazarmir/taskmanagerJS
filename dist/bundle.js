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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _createModal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_createModal__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Hello =
/*#__PURE__*/
function () {
  function Hello(message) {
    _classCallCheck(this, Hello);

    this.message = message;
  }

  _createClass(Hello, [{
    key: "showText",
    value: function showText() {
      console.log("".concat(this.message));
    }
  }]);

  return Hello;
}();

var a = new Hello('sxsx');
a.showText();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// \b(0?\d{1,2}|1\d{1,2}|2[0-5]{2}|24[0-9]{1})(\.(0?\d{1,2}|1\d{1,2}|2[0-5]{2}|24[0-9]{1})){3}\b
var Modal =
/*#__PURE__*/
function () {
  function Modal() {
    _classCallCheck(this, Modal);

    var body = document.body;
    this.taskModal = document.createElement('div');
    this.taskModal.className = 'taskModal';
    body.appendChild(this.taskModal);
    var taskModalContent = document.createElement('div');
    taskModalContent.className = 'taskModalContent';
    this.taskModal.appendChild(taskModalContent);
    var closeModalBtn = document.createElement('span');
    closeModalBtn.id = "closeModalBtn";
    closeModalBtn.innerHTML = "&times";
    taskModalContent.appendChild(closeModalBtn);
    closeModalBtn.addEventListener('click', this.close.bind(this));
    var taskTittle = document.createElement('span');
    taskTittle.innerHTML = 'Enter your task';
    taskModalContent.appendChild(taskTittle);
    var inputModalTask = document.createElement('input');
    inputModalTask.id = "inputTask";
    taskModalContent.appendChild(inputModalTask);
    inputModalTask.addEventListener('keyup', this.enterData.bind(this));
  }

  _createClass(Modal, [{
    key: "open",
    value: function open() {
      this.taskModal.style.display = 'block';
    }
  }, {
    key: "close",
    value: function close() {
      this.taskModal.style.display = 'none';
    }
  }, {
    key: "enterData",
    value: function enterData(e) {
      var input = document.getElementById('inputTask');

      if (e.keyCode == 13) {
        //let inputTittle=document.createElement('p');
        //inputTittle.className='inputTittle';
        //inputTittle.innerHTML=input.value;
        alert(input.value); //taskModalContent.appendChild(inputTittle);

        input.value = '';
        input.blur();
      }
    }
  }, {
    key: "checkModal",
    value: function checkModal(e) {
      if (e.target == this.taskModal) {
        this.taskModal.style.display = 'none';
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var day = document.getElementsByClassName('day');
      var modall = document.getElementsByClassName('taskModal');
      day = document.getElementsByClassName('day');
      [].forEach.call(day, function (el) {
        el.addEventListener('click', function (event) {
          event.preventDefault();
          modal.open();
        });
      });
      [].forEach.call(modall, function (el) {
        el.addEventListener('click', function (event) {
          event.preventDefault();
          modal.checkModal(event);
        });
      });
    }
  }]);

  return Modal;
}();

var modal = new Modal();
modal.refresh();

/***/ })
/******/ ]);