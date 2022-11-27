"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = Overlay;
exports.ClockWipe = ClockWipe;
exports.withClockWipe = void 0;

var _react = _interopRequireDefault(require("react"));

var _Overlay = require("./Overlay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Overlay(props) {
  return /*#__PURE__*/_react.default.createElement(_Overlay.Overlay, props, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(CircleShape, {
    color: props.color
  })));
}

function CircleShape(_ref) {
  var color = _ref.color;
  var style = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transform: 'scale(3.3)'
  };

  _react.default.useEffect(function () {
    var circle = document.getElementById('green-halo');
    var interval = 30;
    var angle = 0;
    var angle_increment = 6;
    window.timer = window.setInterval(function () {
      circle.setAttribute("stroke-dasharray", angle + ", 20000");

      if (angle >= 360) {
        window.clearInterval(window.timer);
      }

      angle += angle_increment;
    }, interval);
  }, []);

  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "100%",
    height: "100%",
    id: "e350d5ca-b3f4-4409-80c7-c3f48cc0f93e",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 768",
    style: style
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "-183",
    cy: "500",
    r: "57",
    id: "green-halo",
    fill: "none",
    stroke: "".concat(color ? color : '#0b556a'),
    strokeWidth: "115",
    strokeDasharray: "0,20000",
    transform: "rotate(-90,100,100)"
  }));
}

function ClockWipe(_ref2) {
  var color = _ref2.color,
      children = _ref2.children,
      _ref2$message = _ref2.message,
      message = _ref2$message === void 0 ? '' : _ref2$message;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Overlay, {
    message: message,
    color: color,
    start: true,
    timeout: 2000
  }), children);
}

var withClockWipe = function withClockWipe(Component, color) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return function (_ref3) {
    var props = _extends({}, _ref3);

    return /*#__PURE__*/_react.default.createElement(ClockWipe, {
      color: color,
      message: ""
    }, /*#__PURE__*/_react.default.createElement(Component, props));
  };
};

exports.withClockWipe = withClockWipe;