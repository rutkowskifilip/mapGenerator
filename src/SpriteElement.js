"use strict";
exports.__esModule = true;
var variables_1 = require("./variables");
var _1 = require(".");
var borderChange_1 = require("./borderChange");
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
            variables_1.mapsToDraw.forEach(function (e) {
                var mapCtx = e.getContext("2d");
                clickedImg.addEventListener("load", function () {
                    mapCtx.drawImage(clickedImg, 0, 0);
                    currentChange.push({ id: e.id, url: clickedImg.src });
                }, false);
                clickedImg.src = canvas.toDataURL();
            });
            variables_1.maps.splice(variables_1.maps.length - _1.undoCount, _1.undoCount);
            variables_1.maps.push(currentChange);
            // maps.push(currentMap);
            (0, _1.setUndoCount)(0);
            if (variables_1.automatic.checked === true) {
                var lastElem = variables_1.mapsToDraw.pop();
                variables_1.mapsToDraw.splice(0, variables_1.mapsToDraw.length);
                // console.log(lastElem);
                var nextElem = (document.getElementById("" + (parseInt(lastElem.id) + 1)));
                variables_1.mapsToDraw.push(nextElem);
                // console.log(mapsToDraw);
            }
            else {
                variables_1.mapsToDraw.splice(0, variables_1.mapsToDraw.length);
            }
            (0, borderChange_1.borderChange)();
        });
        // console.log(this.x, this.y);
        variables_1.img.addEventListener("load", function () {
            var w = variables_1.img.naturalWidth / 32;
            var h = variables_1.img.naturalHeight / 20;
            canvas.width = variables_1.s;
            canvas.height = variables_1.s;
            canvas.id = "sprite" + _this.id;
            // ctx?.clearRect(w, h, this.x * w, this.y * h);
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(variables_1.img, _this.x * w + 1, _this.y * h + 1, w - 2, h - 2, 0, 0, variables_1.s, variables_1.s);
            variables_1.sprites === null || variables_1.sprites === void 0 ? void 0 : variables_1.sprites.appendChild(canvas);
        }, false);
        variables_1.img.src = "sprites.png"; // Set source path
        // console.log(this.x*w, this.y*h,w, h);
    };
    return SpriteElement;
}());
exports["default"] = SpriteElement;
