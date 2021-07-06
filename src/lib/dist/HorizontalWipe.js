"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalWipe = HorizontalWipe;

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
      overflow: "hidden",
      top: 0
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App-header"
  }, /*#__PURE__*/_react.default.createElement(OpenFrame, {
    direction: direction
  }), children);
}