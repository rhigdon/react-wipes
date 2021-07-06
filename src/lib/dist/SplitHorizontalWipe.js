"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SplitHorizontalWipe = SplitHorizontalWipe;
exports.withSplitHorizontalWipe = void 0;

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

  var leftRef = _react.default.createRef(null);

  var rightRef = _react.default.createRef(null);

  _react.default.useEffect(function () {
    var timeout = setTimeout(function () {
      setIsVisible(false);
    }, 900);
    return function () {
      clearTimeout(timeout);
    };
  }, []);

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
      position: "absolute",
      width: "50%",
      height: "100%",
      top: 0
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: leftRef,
    className: "split-horizontal",
    style: {
      height: "100%",
      width: "100%",
      background: '#0b556a',
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
    className: "split-horizontal",
    style: {
      height: "100%",
      background: '#0b556a',
      width: "100%" //transition: "height 1s, width 1s",

    }
  }))));
}

function SplitHorizontalWipe(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(OpenFrame, null), children);
}

var withSplitHorizontalWipe = function withSplitHorizontalWipe(Component) {
  return function (_ref2) {
    var props = _extends({}, _ref2);

    return /*#__PURE__*/_react.default.createElement(SplitHorizontalWipe, null, /*#__PURE__*/_react.default.createElement(Component, props));
  };
};

exports.withSplitHorizontalWipe = withSplitHorizontalWipe;