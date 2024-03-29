"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = Overlay;
exports.VerticalWipe = VerticalWipe;
exports.withVerticalWipe = void 0;

var _react = _interopRequireDefault(require("react"));

var _Overlay = require("./Overlay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Overlay(_ref) {
  var color = _ref.color,
      start = _ref.start,
      onFinish = _ref.onFinish,
      message = _ref.message;
  return /*#__PURE__*/_react.default.createElement(_Overlay.Overlay, {
    start: start,
    onFinish: onFinish,
    message: message
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "100%",
      background: color ? color : '#0b556a',
      animation: "shrinkHeight infinite 1s linear"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: color ? color : '#0b556a',
      width: "100%",
      transition: "height 1s"
    }
  }), /*#__PURE__*/_react.default.createElement(Shape, {
    color: color
  }));
}

function VerticalWipe(_ref2) {
  var color = _ref2.color,
      children = _ref2.children,
      _ref2$message = _ref2.message,
      message = _ref2$message === void 0 ? '' : _ref2$message;

  var _React$useState = _react.default.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      start = _React$useState2[0],
      setStart = _React$useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", null, "\n          @keyframes shrinkHeight {\n            from {\n              height: 100%;\n            }\n            to {\n              height: 0%;\n            }\n          }\n        "), /*#__PURE__*/_react.default.createElement(Overlay, {
    message: message,
    color: color,
    start: start,
    onFinish: function onFinish() {
      return setStart(false);
    }
  }), children);
}

function Shape(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: "shape",
    preserveAspectRatio: "none",
    viewBox: "0 0 1440 100",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z"
  }));
}

var withVerticalWipe = function withVerticalWipe(Component, color) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return function (_ref4) {
    var props = _extends({}, _ref4);

    return /*#__PURE__*/_react.default.createElement(VerticalWipe, {
      color: color,
      message: message
    }, /*#__PURE__*/_react.default.createElement(Component, props));
  };
};

exports.withVerticalWipe = withVerticalWipe;