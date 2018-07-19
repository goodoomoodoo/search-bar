'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rootReducer = undefined;

var _action = require('./action');

var rootReducer = exports.rootReducer = function rootReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _action.STORE_DATA:
            return { userData: action.payload, currentUser: state.currentUser };
        case _action.STORE_USER:
            return { userData: state.userData, currentUser: action.payload };
        default:
            return state;
    }
};