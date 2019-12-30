"use strict";
exports.__esModule = true;
exports.objectToFormat = function (obj, _a) {
    var separator = (_a === void 0 ? { separator: '' } : _a).separator;
    return obj.format && obj.size + separator + obj.unit;
};
