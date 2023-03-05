"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var variables_js_1 = require("../variables.js");
var borderChange_js_1 = require("../actions/borderChange.js");
var SpriteElement = /** @class */ (function () {
    function SpriteElement(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
    }
    SpriteElement.prototype.loadImage = function () {
        var _this = this;
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.addEventListener("click", function () {
            var clickedImg = new Image();
            var currentChange = new Array();
            variables_js_1.selectedMaps.forEach(function (e) {
                var mapCtx = e.getContext("2d");
                clickedImg.addEventListener("load", function () {
                    mapCtx.drawImage(clickedImg, 0, 0);
                    currentChange.push({ id: e.id, url: clickedImg.src });
                }, false);
                clickedImg.src = canvas.toDataURL();
            });
            variables_js_1.maps.splice(variables_js_1.maps.length - variables_js_1.undoCount, variables_js_1.undoCount);
            variables_js_1.maps.push(currentChange);
            (0, variables_js_1.setUndoCount)(0);
            if (variables_js_1.automatic.checked === true) {
                var lastElem = variables_js_1.selectedMaps.pop();
                variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);
                var nextElem = (document.getElementById("" + (parseInt(lastElem.id) + 1)));
                variables_js_1.selectedMaps.push(nextElem);
            }
            else {
                variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);
            }
            (0, borderChange_js_1.borderChange)();
        });
        variables_js_1.img.addEventListener("load", function () {
            var w = variables_js_1.img.naturalWidth / 32;
            var h = variables_js_1.img.naturalHeight / 20;
            canvas.width = variables_js_1.s;
            canvas.height = variables_js_1.s;
            canvas.id = "sprite" + _this.id;
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(variables_js_1.img, _this.x * w + 1, _this.y * h + 1, w - 2, h - 2, 0, 0, variables_js_1.s, variables_js_1.s);
            variables_js_1.sprites === null || variables_js_1.sprites === void 0 ? void 0 : variables_js_1.sprites.appendChild(canvas);
        }, false);
        variables_js_1.img.src = "sprites.png"; // Set source path
    };
    return SpriteElement;
}());
exports.default = SpriteElement;
