"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
var MapElement_js_1 = require("../classes/MapElement.js");
var variables_js_1 = require("../variables.js");
var load = function () {
    var fileInput = document.getElementById("fileInput");
    fileInput.click();
    fileInput.onchange = function (e) {
        if (fileInput.files) {
            var file = fileInput.files[0];
            if (!file) {
                console.error("No file selected");
                return;
            }
            var reader_1 = new FileReader();
            reader_1.readAsText(file);
            reader_1.addEventListener("load", function () {
                var data = reader_1.result;
                var arr = JSON.parse(data);
                variables_js_1.map.innerHTML = "";
                arr.forEach(function (e, i) {
                    var mapElem = new MapElement_js_1.default(i, e);
                    mapElem.loadMap();
                });
            });
        }
    };
};
exports.load = load;
