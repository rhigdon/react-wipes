"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = Overlay;
exports.MatrixWipe = MatrixWipe;
exports.withMatrixWipe = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAnime = require("react-anime");

var _Overlay = require("./Overlay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Overlay(props) {
  return /*#__PURE__*/_react.default.createElement(_Overlay.Overlay, props, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      width: "100%",
      height: "100%",
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(MatrixCutout, {
    color: props.color
  })));
}

function MatrixCutout(_ref) {
  var color = _ref.color,
      secondaryColor = _ref.secondaryColor;

  var ref = _react.default.useRef(null);

  _react.default.useEffect(function () {
    if (ref.current) {
      var basicTimeline = _reactAnime.anime.timeline();

      basicTimeline.add({
        targets: '.matrix-secondary-row',
        opacity: [1, 0],
        duration: 750,
        easing: "easeOutSine"
      }).add({
        targets: '.matrix-primary-row',
        opacity: [1, 0],
        duration: 750,
        easing: "easeOutSine"
      });
    }
  }, [ref]);

  var width = "68";
  var height = "68";
  var SQUARES = 68;
  return /*#__PURE__*/_react.default.createElement("svg", {
    id: "matrix-cutout",
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 518 517.94"
  }, _toConsumableArray(new Array(8)).map(function (_, rowIdx) {
    var fillColor;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: rowIdx
    }, _toConsumableArray(new Array(8)).map(function (_, colIdx) {
      var isEvenRow = rowIdx % 2;

      if (colIdx % 2 === 0) {
        isEvenRow = !isEvenRow;
      }

      if (isEvenRow) {
        fillColor = color ? color : "#231f20";
      } else {
        fillColor = secondaryColor ? secondaryColor : "#e6e7e8";
      }

      var x = rowIdx * SQUARES;
      return /*#__PURE__*/_react.default.createElement("rect", {
        key: "".concat(colIdx, "-").concat(rowIdx),
        stroke: "#000000",
        className: isEvenRow ? "matrix-primary-row" : "matrix-secondary-row",
        fill: fillColor,
        x: x,
        y: SQUARES * colIdx,
        width: height,
        height: width
      });
    }));
  }));
}

function MatrixWipe(_ref2) {
  var color = _ref2.color,
      children = _ref2.children;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Overlay, {
    color: color,
    start: true
  }), children);
}

var withMatrixWipe = function withMatrixWipe(Component, color) {
  return function (_ref3) {
    var props = _extends({}, _ref3);

    return /*#__PURE__*/_react.default.createElement(MatrixWipe, {
      color: color
    }, /*#__PURE__*/_react.default.createElement(Component, props));
  };
};

exports.withMatrixWipe = withMatrixWipe;