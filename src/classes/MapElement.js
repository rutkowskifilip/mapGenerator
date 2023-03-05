"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var variables_js_1 = require("../variables.js");
var borderChange_js_1 = require("../actions/borderChange.js");
var MapElement = /** @class */ (function () {
    function MapElement(id, url) {
        this.id = id;
        this.url = url;
    }
    MapElement.prototype.loadMap = function () {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.classList.add("mapElem");
        canvas.width = variables_js_1.s;
        canvas.height = variables_js_1.s;
        canvas.id = "" + this.id;
        variables_js_1.mapsElems.push(canvas);
        if (this.url !== "") {
            var img_1 = new Image();
            img_1.addEventListener("load", function () {
                ctx.drawImage(img_1, 0, 0);
            });
            img_1.src = this.url;
        }
        canvas.addEventListener("click", function (e) {
            if (!e.ctrlKey) {
                variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);
            }
            variables_js_1.selectedMaps.push(canvas);
            (0, borderChange_js_1.borderChange)();
            //   ctx.drawImage(clickedSprite, 0, 0);
        });
        variables_js_1.map === null || variables_js_1.map === void 0 ? void 0 : variables_js_1.map.appendChild(canvas);
    };
    return MapElement;
}());
exports.default = MapElement;
