"use strict";
exports.__esModule = true;
var to_string_1 = require("./to-string");
var to_number_1 = require("./to-number");
exports.cbytes = function (val, options) {
    if (typeof val === 'number') {
        return to_string_1.toString(val, options);
    }
    else if (typeof val === 'string') {
        return to_number_1.toNumber(val);
    }
};
