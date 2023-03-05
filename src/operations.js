"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operations = void 0;
var save_js_1 = require("./operations/save.js");
var load_js_1 = require("./operations/load.js");
var clear_js_1 = require("./operations/clear.js");
var undo_js_1 = require("./operations/undo.js");
var redo_js_1 = require("./operations/redo.js");
var copy_js_1 = require("./operations/copy.js");
var variables_js_1 = require("./variables.js");
var paste_js_1 = require("./operations/paste.js");
var cut_js_1 = require("./operations/cut.js");
var ContextMenu_js_1 = require("./classes/ContextMenu.js");
var operations = function () {
    var menu = new ContextMenu_js_1.ContextMenu(undo_js_1.undo, redo_js_1.redo, copy_js_1.copy, cut_js_1.cut, paste_js_1.paste, save_js_1.save, load_js_1.load);
    variables_js_1.map.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        menu.show(e.pageX, e.pageY);
        window.addEventListener("click", menu.hide);
        console.log("aaa");
    });
    document.querySelector("body").addEventListener("keydown", function (e) {
        e.preventDefault();
        if (e.code === "Delete") {
            (0, clear_js_1.clear)();
        }
        else if (e.code === "KeyZ" && e.ctrlKey) {
            (0, undo_js_1.undo)();
        }
        else if (e.ctrlKey && e.code === "KeyY") {
            (0, redo_js_1.redo)();
        }
        else if (e.ctrlKey && e.code === "KeyS") {
            (0, save_js_1.save)();
        }
        else if (e.ctrlKey && e.code === "KeyL") {
            (0, load_js_1.load)();
        }
        else if (e.ctrlKey && e.code === "KeyC") {
            (0, copy_js_1.copy)(variables_js_1.selectedMaps);
        }
        else if (e.ctrlKey && e.code === "KeyV") {
            (0, paste_js_1.paste)();
        }
        else if (e.ctrlKey && e.code === "KeyX") {
            (0, cut_js_1.cut)(variables_js_1.selectedMaps);
        }
    });
};
exports.operations = operations;
