"use strict";
exports.__esModule = true;
var variables_1 = require("./variables");
exports.toString = function (a, _a) {
    var _b = _a === void 0 ? {} : _a, decimals = _b.decimals, _c = _b.separator, separator = _c === void 0 ? '' : _c;
    var unit = 'B';
    var size = a;
    if ((a >= 0) && (a < variables_1.kb)) {
        unit = 'B';
    }
    else if ((a >= variables_1.kb) && (a < variables_1.mb)) {
        unit = 'KB';
    }
    else if ((a >= variables_1.mb) && (a < variables_1.gb)) {
        unit = 'MB';
    }
    else if ((a >= variables_1.gb) && (a < variables_1.tb)) {
        unit = 'GB';
    }
    else if ((a >= variables_1.tb) && (a < variables_1.pb)) {
        unit = 'TB';
    }
    else if ((a >= variables_1.pb) && (a < variables_1.eb)) {
        unit = 'PB';
    }
    else if ((a >= variables_1.eb) && (a < variables_1.zb)) {
        unit = 'EB';
    }
    else if ((a >= variables_1.zb) && (a < variables_1.yb)) {
        unit = 'ZB';
    }
    else if (a >= variables_1.yb) {
        unit = 'YB';
    }
    size = a / variables_1.units[unit.toLowerCase()];
    decimals !== undefined && (size = size.toFixed(decimals));
    return "" + size + separator + unit;
};
