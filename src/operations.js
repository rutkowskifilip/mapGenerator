"use strict";
exports.__esModule = true;
exports.operations = void 0;
var index_js_1 = require("./index.js");
var variables_js_1 = require("./variables.js");
var borderChange_js_1 = require("./borderChange.js");
var startX = 0;
var startY = 0;
var draw = false;
var div = document.createElement("div");
document.querySelector("#right").appendChild(div);
var operations = function () {
    document.querySelector("body").addEventListener("keydown", function (e) {
        console.log(e.code);
        if (e.code === "Delete") {
            e.preventDefault();
            var currentChange_1 = new Array();
            variables_js_1.mapsToDraw.forEach(function (e) {
                var ctx = e.getContext("2d");
                ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);
                currentChange_1.push({ id: e.id, url: e.toDataURL() });
            });
            variables_js_1.maps.splice(variables_js_1.maps.length - index_js_1.undoCount, index_js_1.undoCount);
            variables_js_1.maps.push(currentChange_1);
            variables_js_1.mapsToDraw.splice(0, variables_js_1.mapsToDraw.length);
            (0, index_js_1.setUndoCount)(0);
            (0, borderChange_js_1.borderChange)();
        }
        else if (e.code === "KeyZ" && e.ctrlKey) {
            (0, index_js_1.setUndoCount)(index_js_1.undoCount + 1);
            console.log(variables_js_1.maps[variables_js_1.maps.length - index_js_1.undoCount]);
            var undoImg_1 = new Image();
            variables_js_1.maps[variables_js_1.maps.length - index_js_1.undoCount].forEach(function (e) {
                var undoCanvas = document.getElementById(e.id);
                console.log(undoCanvas);
                var ctx = undoCanvas.getContext("2d");
                var clear = true;
                for (var i = 0; i < variables_js_1.maps.length - index_js_1.undoCount; i++) {
                    variables_js_1.maps[i].forEach(function (j) {
                        if (j.id === e.id) {
                            if (clear) {
                                clear = false;
                                undoImg_1.src = j.url;
                            }
                        }
                    });
                }
                if (clear) {
                    console.log("clear " + e.id);
                    ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);
                }
                else {
                    console.log("draw " + e.id);
                    undoImg_1.addEventListener("load", function () {
                        ctx.drawImage(undoImg_1, 0, 0);
                    });
                }
            });
        }
        else if (e.ctrlKey && e.code === "KeyY") {
            if (index_js_1.undoCount > 0) {
                (0, index_js_1.setUndoCount)(index_js_1.undoCount - 1);
                // console.log(undoCount);
                var redoImg_1 = new Image();
                //   console.log(maps[maps.length - undoCount - 1]);
                variables_js_1.maps[variables_js_1.maps.length - index_js_1.undoCount - 1].forEach(function (e) {
                    var redoCanvas = document.getElementById(e.id);
                    var ctx = redoCanvas.getContext("2d");
                    redoImg_1.src = e.url;
                    redoImg_1.addEventListener("load", function () {
                        console.log(redoImg_1.src);
                        ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);
                        ctx.drawImage(redoImg_1, 0, 0);
                    });
                    // }
                });
            }
        }
    });
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
exports.operations = operations;
