"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCopiedMaps = exports.setUndoCount = exports.undoCount = exports.div = exports.maps = exports.mapsElems = exports.copiedMaps = exports.selectedMaps = exports.clickedSprite = exports.m = exports.s = exports.automatic = exports.img = exports.map = exports.sprites = void 0;
exports.sprites = document.getElementById("sprites");
exports.map = document.getElementById("map");
exports.img = new Image();
exports.automatic = (document.getElementById("automatic"));
exports.s = ((exports.sprites === null || exports.sprites === void 0 ? void 0 : exports.sprites.offsetWidth) !== undefined ? (exports.sprites === null || exports.sprites === void 0 ? void 0 : exports.sprites.offsetWidth) - 64 : 0) / 16;
exports.m = (exports.map === null || exports.map === void 0 ? void 0 : exports.map.offsetWidth) !== undefined ? exports.map === null || exports.map === void 0 ? void 0 : exports.map.offsetWidth : 0;
exports.selectedMaps = new Array();
exports.copiedMaps = new Array();
exports.mapsElems = new Array();
exports.maps = new Array();
exports.div = document.createElement("div");
exports.undoCount = 0;
var setUndoCount = function (x) {
    exports.undoCount = x;
};
exports.setUndoCount = setUndoCount;
var setCopiedMaps = function (maps, cut) {
    if (cut) {
        maps.forEach(function (e) {
            var canvas = document.createElement("canvas");
            canvas.width = exports.s;
            canvas.height = exports.s;
            canvas.style.position = "absolute";
            canvas.style.top = e.getBoundingClientRect().top + "px";
            canvas.style.left = e.getBoundingClientRect().left + "px";
            canvas.style.opacity = "0";
            var ctx = canvas.getContext("2d");
            var img = new Image();
            img.addEventListener("load", function () {
                ctx.drawImage(img, 0, 0);
            });
            document.querySelector("body").appendChild(canvas);
            var bound = canvas.getBoundingClientRect();
            img.src = e.toDataURL();
            exports.copiedMaps.push(canvas);
        });
    }
    else {
        maps.forEach(function (e) {
            exports.copiedMaps.push(e);
        });
    }
};
exports.setCopiedMaps = setCopiedMaps;
