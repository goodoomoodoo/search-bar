'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var STORE_DATA = exports.STORE_DATA = 'STORE_DATA';

// dispatch action: store user data( useless )
var storeData = exports.storeData = function storeData(data) {
    return {
        type: STORE_DATA,
        payload: data
    };
};

var STORE_USER = exports.STORE_USER = 'STORE_USER';

// dispatch action: store the selected user
var storeUser = exports.storeUser = function storeUser(data) {
    return {
        type: STORE_USER,
        payload: data
    };
};