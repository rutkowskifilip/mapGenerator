"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = void 0;
var borderChange_js_1 = require("../actions/borderChange.js");
var variables_js_1 = require("../variables.js");
var clear = function () {
    var currentChange = new Array();
    variables_js_1.selectedMaps.forEach(function (e) {
        var ctx = e.getContext("2d");
        ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);
        var currentChangeElem = { id: e.id, url: e.toDataURL() };
        currentChange.push(currentChangeElem);
    });
    variables_js_1.maps.splice(variables_js_1.maps.length - variables_js_1.undoCount, variables_js_1.undoCount);
    variables_js_1.maps.push(currentChange);
    variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);
    (0, variables_js_1.setUndoCount)(0);
    (0, borderChange_js_1.borderChange)();
};
exports.clear = clear;
