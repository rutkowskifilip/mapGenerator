"use strict";
exports.__esModule = true;
exports.borderChange = void 0;
var variables_js_1 = require("./variables.js");
var borderChange = function () {
    variables_js_1.mapsElems.forEach(function (e) {
        if (e !== null) {
            e.style.borderColor = "whitesmoke";
        }
    });
    variables_js_1.mapsToDraw.forEach(function (e) {
        if (e !== null) {
            e.style.borderColor = "red";
        }
    });
};
exports.borderChange = borderChange;
