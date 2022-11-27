"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = Overlay;
exports.StarWipe = StarWipe;
exports.withStarWipe = void 0;

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
  }, /*#__PURE__*/_react.default.createElement(StarCutout, {
    color: props.color
  })));
}

function StarCutout(_ref) {
  var color = _ref.color;
  var style = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden"
  };

  var ref = _react.default.useRef(null);

  _react.default.useEffect(function () {
    if (ref && ref.current) {
      var basicTimeline = _reactAnime.anime.timeline();

      basicTimeline.add({
        targets: ref.current,
        scale: [1, 55],
        duration: 3000,
        easing: "easeOutSine"
      });
    }
  }, [ref]);

  return /*#__PURE__*/_react.default.createElement("svg", {
    ref: ref,
    width: "100%",
    height: "100%",
    id: "e350d5ca-b3f4-4409-80c7-c3f48cc0f93e",
    "data-name": "Star Cutout",
    viewBox: "0 0 1024 768",
    style: style
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M.5,767.5V.5h1023v767ZM540.55,436.78l-7-48.89,36.31-33.47L521.21,346,500.6,301.08l-23.08,43.66-49,5.74,34.39,35.44-9.7,48.42,44.33-21.75Z",
    fill: color ? color : "#fff"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: color ? color : "#61dafb",
    d: "M1023,1V767H1V1H1023M477.2,344.28l-47.78,5.58-2,.24,1.41,1.45,33.5,34.53-9.45,47.17-.4,2,1.82-.9,43.19-21.19,41.94,23.57,1.76,1-.28-2-6.81-47.63,35.37-32.6L571,354.1l-2-.34-47.4-8.25L501.48,301.8l-.85-1.85-.94,1.8L477.2,344.28M1024,0H0V768H1024V0ZM453.85,433.45l9.55-47.69-33.87-34.9,48.31-5.65,22.73-43,20.3,44.2,47.91,8.33L533,387.7l6.88,48.15L497.51,412l-43.66,21.43Z"
  }));
}

function StarWipe(_ref2) {
  var color = _ref2.color,
      children = _ref2.children,
      _ref2$message = _ref2.message,
      message = _ref2$message === void 0 ? '' : _ref2$message;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Overlay, {
    color: color,
    start: true,
    message: message
  }), children);
}

var withStarWipe = function withStarWipe(Component, color) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return function (_ref3) {
    var props = _extends({}, _ref3);

    return /*#__PURE__*/_react.default.createElement(StarWipe, {
      color: color,
      message: message
    }, /*#__PURE__*/_react.default.createElement(Component, props));
  };
};

exports.withStarWipe = withStarWipe;