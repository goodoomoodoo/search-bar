'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _template = require('./template');

var _reactRedux = require('react-redux');

var _App = require('./views/App');

var _App2 = _interopRequireDefault(_App);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _DataTree = require('./views/server/structure/DataTree');

var _DataTree2 = _interopRequireDefault(_DataTree);

var _store = require('./views/redux/store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// user data 


// react redux
var initialState = {
    userData: [],
    currentUser: {}
};

// component


(0, _nodeFetch2.default)('https://jsonplaceholder.typicode.com/users').then(function (res) {
    return res.json();
}).then(function (json) {
    var userTree = new _DataTree2.default();

    userTree.initialize(json);
    initialState['userData'] = userTree.rootArr;
});

// field
var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

// setup store


var store = (0, _store.configureStore)(initialState);

// host static files
app.use(_express2.default.static('public'));

// response to request
app.get('/*', function (req, res) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_App2.default, null)
    ));

    var indexHTML = (0, _template.template)(content, initialState);

    res.send(indexHTML);
});

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT + ' ...');
});