"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cut = void 0;
var borderChange_js_1 = require("../actions/borderChange.js");
var variables_js_1 = require("../variables.js");
var clear_js_1 = require("./clear.js");
var cut = function (selectedMaps) {
    variables_js_1.copiedMaps.forEach(function (e) {
        if (Array.from(document.querySelector("body").children).includes(e)) {
            document.querySelector("body").removeChild(e);
        }
    });
    variables_js_1.copiedMaps.splice(0, variables_js_1.copiedMaps.length);
    (0, variables_js_1.setCopiedMaps)(selectedMaps, true);
    (0, clear_js_1.clear)();
    selectedMaps.splice(0, selectedMaps.length);
    (0, borderChange_js_1.borderChange)();
};
exports.cut = cut;
