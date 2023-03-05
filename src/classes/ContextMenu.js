"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenu = void 0;
var variables_1 = require("../variables");
var ContextMenu = /** @class */ (function () {
    function ContextMenu(undo, redo, copy, cut, paste, save, load) {
        var _this = this;
        this.parent = document.getElementById("contextMenu");
        this.show = function (x, y) {
            _this.parent.style.display = "flex";
            _this.parent.style.left = x + "px";
            _this.parent.style.top = y + "px";
        };
        this.hide = function () {
            _this.parent.style.display = "none";
        };
        this.undo = document.createElement("div");
        this.undo.innerHTML = "<p>undo</p><p class='shortcut'>ctrl + Z</p>";
        this.undo.style.borderTop = "none";
        this.undo.addEventListener("click", undo);
        this.redo = document.createElement("div");
        this.redo.innerHTML = "<p>redo</p><p class='shortcut'>ctrl + Y</p>";
        this.redo.addEventListener("click", redo);
        this.copy = document.createElement("div");
        this.copy.innerHTML = "<p>copy</p><p class='shortcut'>ctrl + C</p>";
        this.copy.style.borderTopColor = "whitesmoke";
        this.copy.style.borderTopStyle = "solid";
        this.copy.addEventListener("click", function () { return copy(variables_1.selectedMaps); });
        this.cut = document.createElement("div");
        this.cut.innerHTML = "<p>cut</p><p class='shortcut'>ctrl + X</p>";
        this.cut.addEventListener("click", function () { return cut(variables_1.selectedMaps); });
        this.paste = document.createElement("div");
        this.paste.innerHTML = "<p>paste</p><p class='shortcut'>ctrl + V</p>";
        this.paste.addEventListener("click", paste);
        this.save = document.createElement("div");
        this.save.innerHTML = "<p>save</p><p class='shortcut'>ctrl + S</p>";
        this.save.style.borderTopColor = "whitesmoke";
        this.save.style.borderTopStyle = "solid";
        this.save.addEventListener("click", save);
        this.load = document.createElement("div");
        this.load.innerHTML = "<p>load</p><p class='shortcut'>ctrl + L</p>";
        this.load.addEventListener("click", load);
        this.parent.appendChild(this.undo);
        this.parent.appendChild(this.redo);
        this.parent.appendChild(this.copy);
        this.parent.appendChild(this.cut);
        this.parent.appendChild(this.paste);
        this.parent.appendChild(this.save);
        this.parent.appendChild(this.load);
    }
    return ContextMenu;
}());
exports.ContextMenu = ContextMenu;
