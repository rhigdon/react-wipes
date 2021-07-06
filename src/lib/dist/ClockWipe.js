"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClockWipe = ClockWipe;
exports.withClockWipe = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function OpenFrame(props) {
  var _React$useState = _react.default.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isVisible = _React$useState2[0],
      setIsVisible = _React$useState2[1];

  _react.default.useEffect(function () {
    var timeout = setTimeout(function () {
      setIsVisible(false);
    }, 2000);
    return function () {
      clearTimeout(timeout);
    };
  }, []);

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: isVisible ? "block" : "none",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(CircleShape, null)));
}

function CircleShape() {
  var style = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transform: 'scale(3.3)'
  };

  var ref = _react.default.useRef(null);

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
  }, [ref]);

  return /*#__PURE__*/_react.default.createElement("svg", {
    ref: ref,
    width: "100%",
    height: "100%",
    id: "e350d5ca-b3f4-4409-80c7-c3f48cc0f93e",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 768",
    style: style
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "-183",
    cy: "500",
    r: "57",
    id: "green-halo",
    fill: "none",
    stroke: "#0b556a",
    strokeWidth: "115",
    strokeDasharray: "0,20000",
    transform: "rotate(-90,100,100)"
  }));
}

function ClockWipe(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App-header"
  }, /*#__PURE__*/_react.default.createElement(OpenFrame, null), children);
}

var withClockWipe = function withClockWipe(Component) {
  return function (_ref2) {
    var props = _extends({}, _ref2);

    return /*#__PURE__*/_react.default.createElement(ClockWipe, null, /*#__PURE__*/_react.default.createElement(Component, props));
  };
};

exports.withClockWipe = withClockWipe;