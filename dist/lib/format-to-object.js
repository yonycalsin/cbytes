"use strict";
exports.__esModule = true;
var variables_1 = require("./variables");
exports.formatToObject = function (format) {
    var obj = variables_1.parseFormat.exec(format);
    return {
        unit: obj && obj[4],
        size: obj && parseFloat(obj[1]),
        format: obj && obj[0]
    };
};
