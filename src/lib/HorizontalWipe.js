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
    color: props.color,
    direction: props.direction
  })));
}

function Screen(props) {
  var color = props.color,
      direction = props.direction;

  var ref = _react.default.useRef(null);

  _react.default.useEffect(function () {
    if (ref && ref.current) {
      var basicTimeline = _reactAnime.anime.timeline();

      basicTimeline.add({
        targets: ref.current,
        translateX: direction ? "-=".concat(window.innerWidth) : "".concat(window.innerWidth, "px"),
        duration: 1000,
        easing: "easeInOutSine"
      });
    }
  }, [ref, direction]);

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    style: {
      width: "100%",
      height: "100%",
      backgroundColor: color ? color : "#61dafb"
    }
  });
}

function HorizontalWipe(_ref) {
  var color = _ref.color,
      children = _ref.children,
      direction = _ref.direction,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? '' : _ref$message;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Overlay, {
    color: color,
    start: true,
    direction: direction,
    message: message
  }), children);
}

var withHorizontalWipe = function withHorizontalWipe(Component, color) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return function (_ref2) {
    var props = _extends({}, _ref2);

    return /*#__PURE__*/_react.default.createElement(HorizontalWipe, {
      color: color,
      message: message
    }, /*#__PURE__*/_react.default.createElement(Component, props));
  };
};

exports.withHorizontalWipe = withHorizontalWipe;