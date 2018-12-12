(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.component2 = factory(global.React));
}(this, (function (React) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var Component2 =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Component2, _Component);

    function Component2() {
      _classCallCheck(this, Component2);

      return _possibleConstructorReturn(this, _getPrototypeOf(Component2).apply(this, arguments));
    }

    _createClass(Component2, [{
      key: "render",
      value: function render() {
        return React__default.createElement("div", null, React__default.createElement("h1", null, "I'm the most usefull component ever"));
      }
    }]);

    return Component2;
  }(React.Component);

  var Component3 =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Component3, _Component);

    function Component3() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Component3);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Component3)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sayHello", function () {
        console.log("hello");
      });

      return _this;
    }

    _createClass(Component3, [{
      key: "render",
      value: function render() {
        return React__default.createElement("div", null, React__default.createElement("h1", null, "I'm the second most usefull component"), React__default.createElement("h2", null, "the component below is imported"), React__default.createElement("button", {
          onClick: this.sayHello
        }, "say hello"), React__default.createElement(Component2, null));
      }
    }]);

    return Component3;
  }(React.Component);

  return Component3;

})));
