"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = Overlay;
exports.SplitVerticalWipe = SplitVerticalWipe;
exports.withSplitVerticalWipe = void 0;

var _react = _interopRequireDefault(require("react"));

var _Overlay = require("./Overlay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Overlay(props) {
  var color = props.color;
  return /*#__PURE__*/_react.default.createElement(_Overlay.Overlay, props, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "absolute",
      width: "100%",
      height: "50%"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      animation: "shrinkHeight infinite 1s linear",
      height: "100%",
      width: "100%",
      background: color ? color : '#0b556a'
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      top: "50%",
      position: "absolute",
      width: "100%",
      height: "50%"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      height: "100%",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: "100%",
      background: color ? color : '#0b556a',
      width: "100%",
      animation: "shrinkHeight infinite 1s linear"
    }
  }))));
}

function SplitVerticalWipe(_ref) {
  var children = _ref.children,
      color = _ref.color,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? '' : _ref$message;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", null, "\n          @keyframes shrinkHeight {\n            from {\n              height: 100%;\n            }\n            to {\n              height: 0%;\n            }\n          }\n        "), /*#__PURE__*/_react.default.createElement(Overlay, {
    color: color,
    start: true,
    message: message
  }), children);
}

var withSplitVerticalWipe = function withSplitVerticalWipe(Component, color) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return function (_ref2) {
    var props = _extends({}, _ref2);

    return /*#__PURE__*/_react.default.createElement(SplitVerticalWipe, {
      color: color,
      message: message
    }, /*#__PURE__*/_react.default.createElement(Component, props));
  };
};

exports.withSplitVerticalWipe = withSplitVerticalWipe;