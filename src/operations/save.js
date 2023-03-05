"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = void 0;
var save = function () {
    var elems = Array.from(document.getElementsByClassName("mapElem"));
    var urls = new Array();
    elems.forEach(function (e) {
        urls.push(e.toDataURL());
    });
    var data = JSON.stringify(urls);
    var type = "application/json";
    var name = window.prompt("Filename", "");
    if (name) {
        var filename = name + ".json";
        var blob = new Blob([data], { type: type });
        var url_1 = URL.createObjectURL(blob);
        var link = document.createElement("a");
        link.innerText = "save";
        link.href = url_1;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        setTimeout(function () {
            URL.revokeObjectURL(url_1);
        }, 0);
        document.body.removeChild(link);
    }
};
exports.save = save;
