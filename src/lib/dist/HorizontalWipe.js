"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = Overlay;
exports.HorizontalWipe = HorizontalWipe;
exports.withHorizontalWipe = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAnime = require("react-anime");

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
  }, /*#__PURE__*/_react.default.createElement(Screen, {
    direction: props.direction
  })));
}

function Screen(props) {
  var ref = _react.default.useRef(null);

  _react.default.useEffect(function () {
    var basicTimeline = _reactAnime.anime.timeline();

    basicTimeline.add({
      targets: ref.current,
      translateX: props.direction ? "-=".concat(window.innerWidth) : "".concat(window.innerWidth, "px"),
      duration: 1000,
      easing: "easeInOutSine"
    });
  }, [ref, props]);

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    style: {
      width: "100%",
      height: "100%",
      backgroundColor: "#61dafb"
    }
  });
}

function HorizontalWipe(_ref) {
  var children = _ref.children,
      direction = _ref.direction;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Overlay, {
    start: true,
    direction: direction
  }), children);
}

var withHorizontalWipe = function withHorizontalWipe(Component) {
  return function (_ref2) {
    var props = _extends({}, _ref2);

    return /*#__PURE__*/_react.default.createElement(HorizontalWipe, null, /*#__PURE__*/_react.default.createElement(Component, props));
  };
};

exports.withHorizontalWipe = withHorizontalWipe;