"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borderChange = void 0;
var variables_js_1 = require("../variables.js");
var borderChange = function () {
    variables_js_1.mapsElems.forEach(function (e) {
        if (e !== null) {
            e.style.borderColor = "whitesmoke";
        }
    });
    variables_js_1.selectedMaps.forEach(function (e) {
        if (e !== null) {
            e.style.borderColor = "red";
        }
    });
};
exports.borderChange = borderChange;
