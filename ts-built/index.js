"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUndoCount = exports.undoCount = void 0;
var MapElement_js_1 = require("./MapElement.js");
var SpriteElement_js_1 = require("./SpriteElement.js");
var operations_js_1 = require("./operations.js");
var variables_js_1 = require("./variables.js");
var select_js_1 = require("./select.js");
var spriteId = 0;
var mapId = 0;
(0, operations_js_1.operations)();
(0, select_js_1.select)();
exports.undoCount = 0;
var setUndoCount = function (x) {
    exports.undoCount = x;
};
exports.setUndoCount = setUndoCount;
window.onload = function () {
    for (var j = 0; j < 20; j++) {
        for (var i = 0; i < 16; i++) {
            spriteId++;
            var elem = new SpriteElement_js_1.default(i, j, spriteId);
            elem.loadImage();
        }
    }
    for (var j = 0; j < 20; j++) {
        for (var i = 16; i < 32; i++) {
            spriteId++;
            var spriteElem = new SpriteElement_js_1.default(i, j, spriteId);
            spriteElem.loadImage();
        }
    }
    var num = Math.floor(variables_js_1.m / (variables_js_1.s + 4)) * 40;
    for (var j = 0; j < num; j++) {
        mapId++;
        var mapElem = new MapElement_js_1.default(mapId);
        mapElem.loadMap();
    }
};
