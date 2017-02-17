webpackJsonp([1],{

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var connect = __webpack_require__(128).connect;
var actions = __webpack_require__(158);
var Counter = __webpack_require__(349);

var mapProps = function mapProps(state, props) {
  return {
    count: state.getIn(['counter', 'count']),
    lastAmount: state.getIn(['counter', 'lastAmount'])
  };
};

var mapDispatch = {
  onClick: actions.incrementCounter
};

module.exports = connect(mapProps, mapDispatch)(Counter);

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(5);
var Link = __webpack_require__(19).Link;
__webpack_require__(360);

var Counter = function Counter(_ref) {
  var count = _ref.count,
      onClick = _ref.onClick,
      lastAmount = _ref.lastAmount;

  var finalOnClick = function finalOnClick() {
    return onClick(Math.floor(Math.random() * 10));
  };

  return React.createElement(
    'div',
    { className: 'counter-wrapper' },
    React.createElement(
      'h2',
      null,
      count
    ),
    React.createElement(
      'button',
      { onClick: finalOnClick },
      'Increment'
    ),
    React.createElement(
      'div',
      null,
      React.createElement(
        Link,
        { to: '/about' },
        'About Us'
      ),
      ' |  ',
      React.createElement(
        Link,
        { to: '/hello' },
        'Hello World'
      ),
      ' |  ',
      React.createElement(
        Link,
        { to: '/charts' },
        'Charts'
      )
    )
  );
};

module.exports = Counter;

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});