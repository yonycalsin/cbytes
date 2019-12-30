"use strict";
exports.__esModule = true;
var format_to_object_1 = require("./format-to-object");
var index_1 = require("./index");
exports.sizeToObject = function (size) {
    var format = index_1.cbytes(size);
    return format_to_object_1.formatToObject(format);
};
