"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapElement_js_1 = require("./classes/MapElement.js");
var SpriteElement_js_1 = require("./classes/SpriteElement.js");
var operations_js_1 = require("./operations.js");
var variables_js_1 = require("./variables.js");
var select_js_1 = require("./actions/select.js");
(0, operations_js_1.operations)();
(0, select_js_1.select)();
window.onload = function () {
    for (var j = 0; j < 20; j++) {
        for (var i = 0; i < 16; i++) {
            var elem = new SpriteElement_js_1.default(i, j, i + 1);
            elem.loadImage();
        }
    }
    for (var j = 0; j < 20; j++) {
        for (var i = 16; i < 32; i++) {
            var spriteElem = new SpriteElement_js_1.default(i, j, i + 1);
            spriteElem.loadImage();
        }
    }
    var num = Math.floor(variables_js_1.m / (variables_js_1.s + 4)) * 40;
    for (var j = 0; j < num; j++) {
        var mapElem = new MapElement_js_1.default(j + 1, "");
        mapElem.loadMap();
    }
};
