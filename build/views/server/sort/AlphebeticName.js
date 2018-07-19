"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var SortNameByAlphebet = exports.SortNameByAlphebet = function SortNameByAlphebet(data) {
    for (var i = 1; i < data.length; i++) {
        var j = i;
        var temp = data[i];

        while (j > 0 && temp.name < data[j - 1].name) {
            data[j] = data[j - 1];
            j--;
        }

        data[j] = temp;
    }
};