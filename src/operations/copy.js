"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copy = void 0;
var borderChange_js_1 = require("../actions/borderChange.js");
var variables_js_1 = require("../variables.js");
var copy = function (selectedMaps) {
    (0, variables_js_1.setCopiedMaps)(selectedMaps);
    selectedMaps.splice(0, selectedMaps.length);
    (0, borderChange_js_1.borderChange)();
};
exports.copy = copy;
