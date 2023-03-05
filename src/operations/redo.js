"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redo = void 0;
var variables_js_1 = require("../variables.js");
var redo = function () {
    if (variables_js_1.undoCount > 0) {
        (0, variables_js_1.setUndoCount)(variables_js_1.undoCount - 1);
        // console.log(undoCount);
        var redoImg_1 = new Image();
        //   console.log(maps[maps.length - undoCount - 1]);
        variables_js_1.maps[variables_js_1.maps.length - variables_js_1.undoCount - 1].forEach(function (e) {
            var redoCanvas = document.getElementById(e.id);
            var ctx = redoCanvas.getContext("2d");
            redoImg_1.src = e.url;
            redoImg_1.addEventListener("load", function () {
                ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);
                ctx.drawImage(redoImg_1, 0, 0);
            });
            // }
        });
    }
};
exports.redo = redo;
