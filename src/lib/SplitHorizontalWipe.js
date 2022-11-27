"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = Overlay;
exports.SplitHorizontalWipe = SplitHorizontalWipe;
exports.withSplitHorizontalWipe = void 0;

var _react = _interopRequireDefault(require("react"));

var _Overlay = require("./Overlay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Overlay(props) {
  var color = props.color;

  var leftRef = /*#__PURE__*/_react.default.createRef(null);

  var rightRef = /*#__PURE__*/_react.default.createRef(null);

  _react.default.useEffect(function () {
    if (leftRef && leftRef.current.style.width === "100%") {
      setTimeout(function () {
        leftRef.current.style.width = "0%";
      }, 5);
    }

    if (rightRef && rightRef.current.style.width === "100%") {
      setTimeout(function () {
        rightRef.current.style.width = "0%";
      }, 5);
    }
  }, [leftRef, rightRef]);

  return /*#__PURE__*/_react.default.createElement(_Overlay.Overlay, props, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "absolute",
      width: "50%",
      height: "100%",
      top: 0
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: leftRef,
    style: {
      animation: 'shrink infinite 1.1s linear',
      height: "100%",
      width: "100%",
      background: color ? color : '#0b556a',
      transition: "height 1s, width 1s"
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      left: "50%",
      position: "absolute",
      width: "50%",
      top: 0,
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      height: "100%",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: rightRef,
    style: {
      animation: 'shrink infinite 1.1s linear',
      height: "100%",
      background: color ? color : '#0b556a',
      width: "100%"
    }
  }))));
}

function SplitHorizontalWipe(_ref) {
  var color = _ref.color,
      children = _ref.children,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? '' : _ref$message;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", null, "\n          @keyframes shrink {\n            from {\n              width: 100%;\n            }\n            to {\n              width: 0%;\n            }\n          }\n        "), /*#__PURE__*/_react.default.createElement(Overlay, {
    color: color,
    start: true,
    message: message
  }), children);
}

var withSplitHorizontalWipe = function withSplitHorizontalWipe(Component, color) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return function (_ref2) {
    var props = _extends({}, _ref2);

    return /*#__PURE__*/_react.default.createElement(SplitHorizontalWipe, {
      color: color,
      message: message
    }, /*#__PURE__*/_react.default.createElement(Component, props));
  };
};

exports.withSplitHorizontalWipe = withSplitHorizontalWipe;