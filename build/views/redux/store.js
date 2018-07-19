'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configureStore = undefined;

var _reducer = require('./reducer');

var _redux = require('redux');

var configureStore = exports.configureStore = function configureStore(initialState) {
    return (0, _redux.createStore)(_reducer.rootReducer, initialState);
};