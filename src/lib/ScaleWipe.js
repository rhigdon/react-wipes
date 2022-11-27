"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = Overlay;
exports.ScaleWipe = ScaleWipe;
exports.withScaleWipe = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAnime = _interopRequireWildcard(require("react-anime"));

var _Overlay = require("./Overlay");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Overlay(props) {
  var color = props.color;
  return /*#__PURE__*/_react.default.createElement(_Overlay.Overlay, props, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactAnime.default, {
    delay: _reactAnime.anime.stagger(100),
    duration: 5000,
    scale: [0, 1]
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: color ? color : "#0b556a",
      width: window.innerWidth,
      height: window.innerHeight
    }
  }))));
}

function ScaleWipe(_ref) {
  var color = _ref.color,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Overlay, {
    color: color,
    start: true,
    message: message
  }), children);
}

var withScaleWipe = function withScaleWipe(Component, color) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return function (_ref2) {
    var props = _extends({}, _ref2);

    return /*#__PURE__*/_react.default.createElement(ScaleWipe, {
      color: color,
      message: message
    }, /*#__PURE__*/_react.default.createElement(Component, props));
  };
};

exports.withScaleWipe = withScaleWipe;