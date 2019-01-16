webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/cristian/my-app/next-js/components/post.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var PostItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PostItem, _React$Component);

  function PostItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PostItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PostItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sizeMemory", function (size) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

      if (size < 0) {
        return '';
      }

      if (size === 0) {
        return 0 + ' B';
      }

      if (size < 1024) {
        return size.toFixed(0) + ' B';
      } else if (size >= 1024 && size < 1024 * 1024) {
        return (size / 1024).toFixed(page) + ' KB';
      } else if (size >= 1024 * 1024 && size < 1024 * 1024 * 1024) {
        return (size / (1024 * 1024)).toFixed(page) + ' MB';
      } else if (size >= 1024 * 1024 * 1024 && size < 1024 * 1024 * 1024 * 1024) {
        return (size / (1024 * 1024 * 1024)).toFixed(page) + ' GB';
      } else if (size >= 1024 * 1024 * 1024 * 1024) {
        return (size / (1024 * 1024 * 1024 * 1024)).toFixed(page) + ' TB';
      }
    });

    return _this;
  }

  _createClass(PostItem, [{
    key: "render",
    value: function render() {
      console.log(this.sizeMemory(11987));
      var x = this.props.id;
      var url = "/post:id=".concat(x);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post post-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "post-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/post-6.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "post-category cat-2",
        href: "category.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "JavaScript"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "post-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "March 27, 2018")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "post-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.props.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, this.props.body))));
    }
  }]);

  return PostItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostItem);

/***/ })

})
//# sourceMappingURL=index.js.4849154560507ec24966.hot-update.js.map