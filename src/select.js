"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = void 0;
var variables_js_1 = require("./variables.js");
var borderChange_js_1 = require("./borderChange.js");
var startX = 0;
var startY = 0;
var draw = false;
var div = document.createElement("div");
document.querySelector("#right").appendChild(div);
var select = function () {
    variables_js_1.map.addEventListener("mousedown", function (e) {
        e.preventDefault();
        if (!e.ctrlKey) {
            variables_js_1.mapsToDraw.splice(0, variables_js_1.mapsToDraw.length);
            (0, borderChange_js_1.borderChange)();
        }
        div.style.display = "block";
        div.style.position = "absolute";
        div.style.left = e.pageX + "px";
        div.style.top = e.pageY + "px";
        startX = e.pageX;
        startY = e.pageY;
        div.style.zIndex = "1000";
        div.style.background = "rgba(93, 185, 227,0.7)";
        div.style.border = "1px dashed blue";
        div.style.width = "0px";
        div.style.height = "0px";
        draw = true;
    });
    variables_js_1.map.addEventListener("mousemove", function (e) {
        if (draw) {
            if (startX > e.pageX) {
                div.style.left = e.pageX + "px";
            }
            else {
                div.style.left = startX + "px";
            }
            if (startY > e.pageY) {
                div.style.top = e.pageY + "px";
            }
            else {
                div.style.top = startY + "px";
            }
            div.style.width = Math.abs(startX - e.pageX) + "px";
            div.style.height = Math.abs(startY - e.pageY) + "px";
        }
    });
    div.addEventListener("mousemove", function (e) {
        if (draw) {
            if (startX > e.pageX) {
                div.style.left = e.pageX + "px";
            }
            else {
                div.style.left = startX + "px";
            }
            if (startY > e.pageY) {
                div.style.top = e.pageY + "px";
            }
            else {
                div.style.top = startY + "px";
            }
            div.style.width = Math.abs(startX - e.pageX) + "px";
            div.style.height = Math.abs(startY - e.pageY) + "px";
        }
    });
    window.addEventListener("mouseup", function () {
        draw = false;
        var divRect = div.getBoundingClientRect();
        variables_js_1.mapsElems.forEach(function (e) {
            var elemRect = e.getBoundingClientRect();
            var l = divRect.left;
            var r = divRect.right;
            var t = divRect.top;
            var b = divRect.bottom;
            var xOverlap = elemRect.left < r && elemRect.right > l;
            var yOverlap = elemRect.top < b && elemRect.bottom > t;
            var xInside = elemRect.left >= l && elemRect.right <= r;
            var yInside = elemRect.top >= t && elemRect.bottom <= b;
            if (xOverlap &&
                yOverlap &&
                (xInside ||
                    yInside ||
                    (elemRect.bottom > t &&
                        elemRect.top < t &&
                        (elemRect.right > l || elemRect.left < r)) ||
                    (elemRect.top < b &&
                        elemRect.bottom > b &&
                        (elemRect.right > l || elemRect.left < r)))) {
                variables_js_1.mapsToDraw.push(e);
            }
        });
        (0, borderChange_js_1.borderChange)();
        div.style.display = "none";
    });
};
exports.select = select;
