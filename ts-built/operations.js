"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operations = void 0;
var index_js_1 = require("./index.js");
var variables_js_1 = require("./variables.js");
var borderChange_js_1 = require("./borderChange.js");
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
};
exports.operations = operations;
