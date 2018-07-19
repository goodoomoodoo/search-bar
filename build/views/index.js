'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _store = require('./redux/store');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// redux store
var preloadedState = window.__INITIAL_STATE__;

delete window.__INITIAL_STATE__;

var store = (0, _store.configureStore)(preloadedState);

_reactDom2.default.hydrate(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_App2.default, null)
), document.getElementById('root'));