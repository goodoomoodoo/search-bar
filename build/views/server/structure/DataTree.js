'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AlphebeticName = require('../sort/AlphebeticName');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataTree = function () {
    function DataTree() {
        _classCallCheck(this, DataTree);

        this.rootArr = {};
    }

    _createClass(DataTree, [{
        key: 'initialize',
        value: function initialize(data) {
            (0, _AlphebeticName.SortNameByAlphebet)(data);

            this.createTree(this.rootArr, data, 0);
        }

        /**
         * 
         * @param {*} root the root object where data are inserted: object
         * @param {*} data the data to be inserted: array of objects
         * @param {*} index the index of the char of the string: int
         */

    }, {
        key: 'createTree',
        value: function createTree(root, data, index) {
            var tempLst = [];
            var currentData = this.removeSpace(data[0].name);
            var firstChar = index < currentData.length ? currentData.charAt(index) : '0';

            if (firstChar !== '0') {
                for (var i = 0; i < data.length - 1; i++) {
                    var nextData = this.removeSpace(data[i + 1].name);
                    var nextChar = index < nextData.length ? nextData.charAt(index) : '0';

                    if (firstChar === nextChar) {
                        tempLst.push(data[i]);

                        if (i + 1 === data.length - 1) {
                            tempLst.push(data[i + 1]);
                            root[firstChar] = {};
                            root[firstChar].nextRoot = {};
                            root[firstChar].list = tempLst;
                        }
                    } else {
                        tempLst.push(data[i]);
                        root[firstChar] = {};
                        root[firstChar].nextRoot = {};
                        root[firstChar].list = tempLst;
                        tempLst = []; // Clear the tempLst 
                        firstChar = nextChar;

                        if (i + 1 === data.length - 1) {
                            tempLst.push(data[i + 1]);
                            root[firstChar] = {};
                            root[firstChar].nextRoot = {};
                            root[firstChar].list = tempLst;
                        }
                    }
                }
            }

            for (var n in root) {
                if (root[n].list) this.createTree(root[n].nextRoot, root[n].list, index + 1);
            }
        }

        /**
         * Trim all whitespace from the string
         * @param {*} name 
         * @returns {*} A new string of name
         */

    }, {
        key: 'removeSpace',
        value: function removeSpace(name) {
            var trimmedName = '';

            for (var i = 0; i < name.length; i++) {
                var currChar = name.substring(i, i + 1);

                if (currChar !== ' ') trimmedName += currChar;
            }

            return trimmedName;
        }
    }, {
        key: 'userList',
        get: function get() {
            return this.rootArr;
        }
    }]);

    return DataTree;
}();

exports.default = DataTree;