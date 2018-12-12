(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.index = factory(global.React));
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

  var CountDown =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CountDown, _Component);

    function CountDown(props) {
      var _this;

      _classCallCheck(this, CountDown);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CountDown).call(this, props));
      _this.count = _this.count.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.state = {
        days: 0,
        minutes: 0,
        hours: 0,
        secounds: 0,
        time_up: ""
      };
      _this.x = null;
      _this.deadline = null;
      return _this;
    }

    _createClass(CountDown, [{
      key: "count",
      value: function count() {
        var now = new Date().getTime();
        var t = this.deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(t % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(t % (1000 * 60) / 1000);
        this.setState({
          days: days,
          minutes: minutes,
          hours: hours,
          seconds: seconds
        });

        if (t < 0) {
          clearInterval(this.x);
          this.setState({
            days: 0,
            minutes: 0,
            hours: 0,
            seconds: 0,
            time_up: "TIME IS UP"
          });
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.deadline = new Date("apr 29, 2018 21:00:00").getTime();
        this.x = setInterval(this.count, 1000);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            days = _this$state.days,
            seconds = _this$state.seconds,
            hours = _this$state.hours,
            minutes = _this$state.minutes,
            time_up = _this$state.time_up;
        return React__default.createElement("div", null, React__default.createElement("h1", null, "Countdown Clock"), React__default.createElement("div", {
          id: "clockdiv"
        }, React__default.createElement("div", null, React__default.createElement("span", {
          className: "days",
          id: "day"
        }, days), React__default.createElement("div", {
          className: "smalltext"
        }, "Days")), React__default.createElement("div", null, React__default.createElement("span", {
          className: "hours",
          id: "hour"
        }, hours), React__default.createElement("div", {
          className: "smalltext"
        }, "Hours")), React__default.createElement("div", null, React__default.createElement("span", {
          className: "minutes",
          id: "minute"
        }, minutes), React__default.createElement("div", {
          className: "smalltext"
        }, "Minutes")), React__default.createElement("div", null, React__default.createElement("span", {
          className: "seconds",
          id: "second"
        }, seconds), React__default.createElement("div", {
          className: "smalltext"
        }, "Seconds"))), React__default.createElement("p", {
          id: "demo"
        }, time_up));
      }
    }]);

    return CountDown;
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

  var index = {
    Component2: Component2,
    Countdown: CountDown,
    Component3: Component3
  };

  return index;

})));
