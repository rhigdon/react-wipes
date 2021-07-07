"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransitionLink = TransitionLink;

var _react = _interopRequireDefault(require("react"));

var _HorizontalWipe = require("./HorizontalWipe");

var _VerticalWipe = require("./VerticalWipe");

var _StarWipe = require("./StarWipe");

var _SplitVerticalWipe = require("./SplitVerticalWipe");

var _SplitHorizontalWipe = require("./SplitHorizontalWipe");

var _ScaleWipe = require("./ScaleWipe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getOverlay(overlay) {
  switch (overlay) {
    case "horizontal":
      return _HorizontalWipe.Overlay;

    case "scale":
      return _ScaleWipe.Overlay;

    case "split-horizontal":
      return _SplitHorizontalWipe.Overlay;

    case "split-vertical":
      return _SplitVerticalWipe.Overlay;

    case "star":
      return _StarWipe.Overlay;

    case "vertical":
      return _VerticalWipe.Overlay;

    default:
      return _VerticalWipe.Overlay;
  }
}

function TransitionLink(_ref) {
  var className = _ref.className,
      children = _ref.children,
      overlay = _ref.overlay,
      style = _ref.style,
      to = _ref.to;

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      start = _React$useState2[0],
      setStart = _React$useState2[1];

  var Overlay = overlay ? getOverlay(overlay) : _VerticalWipe.Overlay;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      cursor: 'pointer'
    }
  }, start && /*#__PURE__*/_react.default.createElement(Overlay, {
    color: style.color ? style.color : '',
    start: start,
    onFinish: function onFinish() {
      var open = window.open(to, '_blank');

      if (!open) {
        window.location.assign(to);
      }

      setStart(false);
    }
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: className,
    style: style,
    href: to,
    onClick: function onClick(e) {
      setStart(true);
      e.preventDefault();
    }
  }, children));
}