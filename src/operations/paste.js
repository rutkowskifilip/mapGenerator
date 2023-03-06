"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paste = void 0;
var borderChange_js_1 = require("../actions/borderChange.js");
var variables_js_1 = require("../variables.js");
var paste = function () {
    var selectedBounds = new Array();
    var canvases = new Array();
    var pasted = false;
    if (variables_js_1.copiedMaps.length > 0) {
        variables_js_1.copiedMaps.forEach(function (e) {
            var eRect = e.getBoundingClientRect();
            var bounds = {
                left: eRect.left,
                top: eRect.top,
            };
            selectedBounds.push(bounds);
            var elemBound = {
                left: eRect.left,
                top: eRect.top,
            };
            var canvas = document.createElement("canvas");
            canvas.width = variables_js_1.s;
            canvas.height = variables_js_1.s;
            canvas.style.display = "none";
            var ctx = canvas.getContext("2d");
            var img = new Image();
            img.addEventListener("load", function () {
                ctx.drawImage(img, 0, 0);
            });
            img.src = e.toDataURL();
            canvas.style.position = "absolute";
            canvas.classList.add("paste");
            document.querySelector("body").appendChild(canvas);
            canvases.push({ canvas: canvas, bounds: elemBound });
        });
    }
    var top = Math.min.apply(Math, selectedBounds.map(function (o) { return o.top; }));
    var left = Math.min.apply(Math, selectedBounds.map(function (o) { return o.left; }));
    var selectedCanvases = new Array();
    var mapElemsBounds = new Array();
    variables_js_1.mapsElems.forEach(function (e) {
        var eRect = e.getBoundingClientRect();
        var bounds = {
            top: eRect.top,
            left: eRect.left,
        };
        mapElemsBounds.push({ canvas: e, bounds: bounds });
    });
    var previousX = 0;
    var previousY = 0;
    variables_js_1.map.addEventListener("mousemove", function (e) {
        if (!pasted) {
            variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);
        }
        canvases.forEach(function (elem) {
            var canvas = elem.canvas;
            var bounds = elem.bounds;
            var canvasLeft = e.pageX + (bounds.left - left);
            var canvasTop = e.pageY + (bounds.top - top);
            canvas.style.display = "block";
            canvas.style.position = "absolute";
            canvas.style.left = canvasLeft + "px";
            canvas.style.top = canvasTop + "px";
            mapElemsBounds.forEach(function (i) {
                if (Math.abs(i.bounds.left - canvasLeft) < 5 &&
                    Math.abs(i.bounds.top - canvasTop) < 5) {
                    previousX = e.pageX;
                    previousY = e.pageY;
                    variables_js_1.selectedMaps.push(i.canvas);
                    selectedCanvases.push(i.canvas);
                }
            });
            (0, borderChange_js_1.borderChange)();
        });
    });
    variables_js_1.map.addEventListener("click", function () {
        selectedCanvases = selectedCanvases.slice(-variables_js_1.copiedMaps.length);
        console.log("klik");
        if (variables_js_1.copiedMaps.length > 0) {
            selectedCanvases.forEach(function (e, i) {
                var ctx = e.getContext("2d");
                var img = new Image();
                img.addEventListener("load", function () {
                    ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);
                    ctx.drawImage(img, 0, 0);
                    canvases.splice(0, canvases.length);
                    variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);
                    (0, borderChange_js_1.borderChange)();
                    pasted = true;
                    Array.from(document.getElementsByClassName("paste")).forEach(function (elem) {
                        document.querySelector("body").removeChild(elem);
                    });
                });
                img.src = variables_js_1.copiedMaps[i].toDataURL();
            });
        }
    }, { once: true });
    variables_js_1.map.addEventListener("mousedown", function () {
        selectedCanvases = selectedCanvases.slice(-variables_js_1.copiedMaps.length);
        console.log("klik");
        if (variables_js_1.copiedMaps.length > 0) {
            selectedCanvases.forEach(function (e, i) {
                var ctx = e.getContext("2d");
                var img = new Image();
                img.addEventListener("load", function () {
                    ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);
                    ctx.drawImage(img, 0, 0);
                    canvases.splice(0, canvases.length);
                    variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);
                    (0, borderChange_js_1.borderChange)();
                    pasted = true;
                    Array.from(document.getElementsByClassName("paste")).forEach(function (elem) {
                        document.querySelector("body").removeChild(elem);
                    });
                });
                img.src = variables_js_1.copiedMaps[i].toDataURL();
            });
        }
    }, { once: true });
};
exports.paste = paste;
