"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.undo = void 0;
var variables_js_1 = require("../variables.js");
var undo = function () {
    (0, variables_js_1.setUndoCount)(variables_js_1.undoCount + 1);
    var undoImg = new Image();
    variables_js_1.maps[variables_js_1.maps.length - variables_js_1.undoCount].forEach(function (e) {
        var undoCanvas = document.getElementById(e.id);
        var ctx = undoCanvas.getContext("2d");
        var clear = true;
        for (var i = 0; i < variables_js_1.maps.length - variables_js_1.undoCount; i++) {
            variables_js_1.maps[i].forEach(function (j) {
                if (j.id === e.id) {
                    if (clear) {
                        clear = false;
                        undoImg.src = j.url;
                    }
                }
            });
        }
        if (clear) {
            ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);
        }
        else {
            undoImg.addEventListener("load", function () {
                ctx.drawImage(undoImg, 0, 0);
            });
        }
    });
};
exports.undo = undo;
