"use strict";
exports.__esModule = true;
var variables_js_1 = require("./variables.js");
var borderChange_js_1 = require("./borderChange.js");
var MapElement = /** @class */ (function () {
    function MapElement(id) {
        this.id = id;
    }
    MapElement.prototype.loadMap = function () {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.classList.add("mapElem");
        canvas.width = variables_js_1.s;
        canvas.height = variables_js_1.s;
        canvas.id = "" + this.id;
        variables_js_1.mapsElems.push(canvas);
        canvas.addEventListener("click", function (e) {
            if (!e.ctrlKey) {
                variables_js_1.mapsToDraw.splice(0, variables_js_1.mapsToDraw.length);
            }
            variables_js_1.mapsToDraw.push(canvas);
            (0, borderChange_js_1.borderChange)();
            //   ctx.drawImage(clickedSprite, 0, 0);
        });
        variables_js_1.map === null || variables_js_1.map === void 0 ? void 0 : variables_js_1.map.appendChild(canvas);
    };
    return MapElement;
}());
exports["default"] = MapElement;
