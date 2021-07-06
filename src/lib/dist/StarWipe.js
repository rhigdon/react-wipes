"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarWipe = StarWipe;

var _react = _interopRequireDefault(require("react"));

var _reactAnime = require("react-anime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }, 1000);
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
  }, /*#__PURE__*/_react.default.createElement(StarCutout, null)));
}

function StarCutout() {
  var style = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  };

  var ref = _react.default.useRef(null);

  _react.default.useEffect(function () {
    var basicTimeline = _reactAnime.anime.timeline();

    basicTimeline.add({
      targets: ref.current,
      scale: [1, 55],
      duration: 3000,
      easing: "easeOutSine"
    });
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
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M.5,767.5V.5h1023v767ZM540.55,436.78l-7-48.89,36.31-33.47L521.21,346,500.6,301.08l-23.08,43.66-49,5.74,34.39,35.44-9.7,48.42,44.33-21.75Z",
    fill: "#fff"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#61dafb",
    d: "M1023,1V767H1V1H1023M477.2,344.28l-47.78,5.58-2,.24,1.41,1.45,33.5,34.53-9.45,47.17-.4,2,1.82-.9,43.19-21.19,41.94,23.57,1.76,1-.28-2-6.81-47.63,35.37-32.6L571,354.1l-2-.34-47.4-8.25L501.48,301.8l-.85-1.85-.94,1.8L477.2,344.28M1024,0H0V768H1024V0ZM453.85,433.45l9.55-47.69-33.87-34.9,48.31-5.65,22.73-43,20.3,44.2,47.91,8.33L533,387.7l6.88,48.15L497.51,412l-43.66,21.43Z"
  }));
}

function StarWipe(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App-header"
  }, /*#__PURE__*/_react.default.createElement(OpenFrame, null), children);
}