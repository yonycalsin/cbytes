"use strict";
exports.__esModule = true;
var format_to_object_1 = require("./format-to-object");
var variables_1 = require("./variables");
exports.toNumber = function (format) {
    var obj = format_to_object_1.formatToObject(format);
    if (obj.unit && obj.size) {
        return variables_1.units[obj.unit.toLowerCase()] * obj.size;
    }
    return null;
};
