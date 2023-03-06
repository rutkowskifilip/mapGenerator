/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/variables.ts":
/*!**************************!*\
  !*** ./src/variables.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setCopiedMaps = exports.setUndoCount = exports.undoCount = exports.div = exports.maps = exports.mapsElems = exports.copiedMaps = exports.selectedMaps = exports.clickedSprite = exports.m = exports.s = exports.automatic = exports.img = exports.map = exports.sprites = void 0;\nexports.sprites = document.getElementById(\"sprites\");\nexports.map = document.getElementById(\"map\");\nexports.img = new Image();\nexports.automatic = (document.getElementById(\"automatic\"));\nexports.s = ((exports.sprites === null || exports.sprites === void 0 ? void 0 : exports.sprites.offsetWidth) !== undefined ? (exports.sprites === null || exports.sprites === void 0 ? void 0 : exports.sprites.offsetWidth) - 64 : 0) / 16;\nexports.m = (exports.map === null || exports.map === void 0 ? void 0 : exports.map.offsetWidth) !== undefined ? exports.map === null || exports.map === void 0 ? void 0 : exports.map.offsetWidth : 0;\nexports.selectedMaps = new Array();\nexports.copiedMaps = new Array();\nexports.mapsElems = new Array();\nexports.maps = new Array();\nexports.div = document.createElement(\"div\");\nexports.undoCount = 0;\nvar setUndoCount = function (x) {\n    exports.undoCount = x;\n};\nexports.setUndoCount = setUndoCount;\nvar setCopiedMaps = function (maps, cut) {\n    if (cut) {\n        maps.forEach(function (e) {\n            var canvas = document.createElement(\"canvas\");\n            canvas.width = exports.s;\n            canvas.height = exports.s;\n            canvas.style.position = \"absolute\";\n            canvas.style.top = e.getBoundingClientRect().top + \"px\";\n            canvas.style.left = e.getBoundingClientRect().left + \"px\";\n            canvas.style.opacity = \"0\";\n            var ctx = canvas.getContext(\"2d\");\n            var img = new Image();\n            img.addEventListener(\"load\", function () {\n                ctx.drawImage(img, 0, 0);\n            });\n            document.querySelector(\"body\").appendChild(canvas);\n            var bound = canvas.getBoundingClientRect();\n            img.src = e.toDataURL();\n            exports.copiedMaps.push(canvas);\n        });\n    }\n    else {\n        maps.forEach(function (e) {\n            exports.copiedMaps.push(e);\n        });\n    }\n};\nexports.setCopiedMaps = setCopiedMaps;\n\n\n//# sourceURL=webpack:///./src/variables.ts?");

/***/ }),

/***/ "./src/actions/borderChange.js":
/*!*************************************!*\
  !*** ./src/actions/borderChange.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.borderChange = void 0;\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\nvar borderChange = function () {\n    variables_js_1.mapsElems.forEach(function (e) {\n        if (e !== null) {\n            e.style.borderColor = \"whitesmoke\";\n        }\n    });\n    variables_js_1.selectedMaps.forEach(function (e) {\n        if (e !== null) {\n            e.style.borderColor = \"red\";\n        }\n    });\n};\nexports.borderChange = borderChange;\n\n\n//# sourceURL=webpack:///./src/actions/borderChange.js?");

/***/ }),

/***/ "./src/actions/select.js":
/*!*******************************!*\
  !*** ./src/actions/select.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.select = void 0;\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\nvar borderChange_js_1 = __webpack_require__(/*! ./borderChange.js */ \"./src/actions/borderChange.js\");\nvar startX = 0;\nvar startY = 0;\nvar draw = false;\nvar div = document.createElement(\"div\");\ndocument.querySelector(\"#right\").appendChild(div);\nvar select = function () {\n    variables_js_1.map.addEventListener(\"mousedown\", function (e) {\n        e.preventDefault();\n        if (!e.ctrlKey) {\n            variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\n            (0, borderChange_js_1.borderChange)();\n        }\n        div.style.display = \"block\";\n        div.style.position = \"absolute\";\n        div.style.left = e.pageX + \"px\";\n        div.style.top = e.pageY + \"px\";\n        startX = e.pageX;\n        startY = e.pageY;\n        div.style.zIndex = \"1000\";\n        div.style.background = \"rgba(93, 185, 227,0.7)\";\n        div.style.border = \"1px dashed blue\";\n        div.style.width = \"0px\";\n        div.style.height = \"0px\";\n        draw = true;\n    });\n    variables_js_1.map.addEventListener(\"mousemove\", function (e) {\n        if (draw) {\n            if (startX > e.pageX) {\n                div.style.left = e.pageX + \"px\";\n            }\n            else {\n                div.style.left = startX + \"px\";\n            }\n            if (startY > e.pageY) {\n                div.style.top = e.pageY + \"px\";\n            }\n            else {\n                div.style.top = startY + \"px\";\n            }\n            div.style.width = Math.abs(startX - e.pageX) + \"px\";\n            div.style.height = Math.abs(startY - e.pageY) + \"px\";\n        }\n    });\n    div.addEventListener(\"mousemove\", function (e) {\n        if (draw) {\n            if (startX > e.pageX) {\n                div.style.left = e.pageX + \"px\";\n            }\n            else {\n                div.style.left = startX + \"px\";\n            }\n            if (startY > e.pageY) {\n                div.style.top = e.pageY + \"px\";\n            }\n            else {\n                div.style.top = startY + \"px\";\n            }\n            div.style.width = Math.abs(startX - e.pageX) + \"px\";\n            div.style.height = Math.abs(startY - e.pageY) + \"px\";\n        }\n    });\n    window.addEventListener(\"mouseup\", function () {\n        draw = false;\n        var divRect = div.getBoundingClientRect();\n        variables_js_1.mapsElems.forEach(function (e) {\n            var elemRect = e.getBoundingClientRect();\n            var l = divRect.left;\n            var r = divRect.right;\n            var t = divRect.top;\n            var b = divRect.bottom;\n            var xOverlap = elemRect.left < r && elemRect.right > l;\n            var yOverlap = elemRect.top < b && elemRect.bottom > t;\n            var xInside = elemRect.left >= l && elemRect.right <= r;\n            var yInside = elemRect.top >= t && elemRect.bottom <= b;\n            if (xOverlap &&\n                yOverlap &&\n                (xInside ||\n                    yInside ||\n                    (elemRect.bottom > t &&\n                        elemRect.top < t &&\n                        (elemRect.right > l || elemRect.left < r)) ||\n                    (elemRect.top < b &&\n                        elemRect.bottom > b &&\n                        (elemRect.right > l || elemRect.left < r)))) {\n                variables_js_1.selectedMaps.push(e);\n            }\n        });\n        (0, borderChange_js_1.borderChange)();\n        div.style.display = \"none\";\n    });\n};\nexports.select = select;\n\n\n//# sourceURL=webpack:///./src/actions/select.js?");

/***/ }),

/***/ "./src/classes/ContextMenu.js":
/*!************************************!*\
  !*** ./src/classes/ContextMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ContextMenu = void 0;\nvar variables_1 = __webpack_require__(/*! ../variables */ \"./src/variables.ts\");\nvar ContextMenu = /** @class */ (function () {\n    function ContextMenu(undo, redo, copy, cut, paste, save, load) {\n        var _this = this;\n        this.parent = document.getElementById(\"contextMenu\");\n        this.show = function (x, y) {\n            _this.parent.style.display = \"flex\";\n            _this.parent.style.left = x + \"px\";\n            _this.parent.style.top = y + \"px\";\n        };\n        this.hide = function () {\n            _this.parent.style.display = \"none\";\n        };\n        this.undo = document.createElement(\"div\");\n        this.undo.innerHTML = \"<p>undo</p><p class='shortcut'>ctrl + Z</p>\";\n        this.undo.style.borderTop = \"none\";\n        this.undo.addEventListener(\"click\", undo);\n        this.redo = document.createElement(\"div\");\n        this.redo.innerHTML = \"<p>redo</p><p class='shortcut'>ctrl + Y</p>\";\n        this.redo.addEventListener(\"click\", redo);\n        this.copy = document.createElement(\"div\");\n        this.copy.innerHTML = \"<p>copy</p><p class='shortcut'>ctrl + C</p>\";\n        this.copy.style.borderTopColor = \"whitesmoke\";\n        this.copy.style.borderTopStyle = \"solid\";\n        this.copy.addEventListener(\"click\", function () { return copy(variables_1.selectedMaps); });\n        this.cut = document.createElement(\"div\");\n        this.cut.innerHTML = \"<p>cut</p><p class='shortcut'>ctrl + X</p>\";\n        this.cut.addEventListener(\"click\", function () { return cut(variables_1.selectedMaps); });\n        this.paste = document.createElement(\"div\");\n        this.paste.innerHTML = \"<p>paste</p><p class='shortcut'>ctrl + V</p>\";\n        this.paste.addEventListener(\"click\", paste);\n        this.save = document.createElement(\"div\");\n        this.save.innerHTML = \"<p>save</p><p class='shortcut'>ctrl + S</p>\";\n        this.save.style.borderTopColor = \"whitesmoke\";\n        this.save.style.borderTopStyle = \"solid\";\n        this.save.addEventListener(\"click\", save);\n        this.load = document.createElement(\"div\");\n        this.load.innerHTML = \"<p>load</p><p class='shortcut'>ctrl + L</p>\";\n        this.load.addEventListener(\"click\", load);\n        this.parent.appendChild(this.undo);\n        this.parent.appendChild(this.redo);\n        this.parent.appendChild(this.copy);\n        this.parent.appendChild(this.cut);\n        this.parent.appendChild(this.paste);\n        this.parent.appendChild(this.save);\n        this.parent.appendChild(this.load);\n    }\n    return ContextMenu;\n}());\nexports.ContextMenu = ContextMenu;\n\n\n//# sourceURL=webpack:///./src/classes/ContextMenu.js?");

/***/ }),

/***/ "./src/classes/MapElement.js":
/*!***********************************!*\
  !*** ./src/classes/MapElement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\nvar borderChange_js_1 = __webpack_require__(/*! ../actions/borderChange.js */ \"./src/actions/borderChange.js\");\nvar MapElement = /** @class */ (function () {\n    function MapElement(id, url) {\n        this.id = id;\n        this.url = url;\n    }\n    MapElement.prototype.loadMap = function () {\n        var canvas = document.createElement(\"canvas\");\n        var ctx = canvas.getContext(\"2d\");\n        canvas.classList.add(\"mapElem\");\n        canvas.width = variables_js_1.s;\n        canvas.height = variables_js_1.s;\n        canvas.id = \"\" + this.id;\n        variables_js_1.mapsElems.push(canvas);\n        if (this.url !== \"\") {\n            var img_1 = new Image();\n            img_1.addEventListener(\"load\", function () {\n                ctx.drawImage(img_1, 0, 0);\n            });\n            img_1.src = this.url;\n        }\n        canvas.addEventListener(\"click\", function (e) {\n            if (!e.ctrlKey) {\n                variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\n            }\n            variables_js_1.selectedMaps.push(canvas);\n            (0, borderChange_js_1.borderChange)();\n            //   ctx.drawImage(clickedSprite, 0, 0);\n        });\n        variables_js_1.map === null || variables_js_1.map === void 0 ? void 0 : variables_js_1.map.appendChild(canvas);\n    };\n    return MapElement;\n}());\nexports[\"default\"] = MapElement;\n\n\n//# sourceURL=webpack:///./src/classes/MapElement.js?");

/***/ }),

/***/ "./src/classes/SpriteElement.js":
/*!**************************************!*\
  !*** ./src/classes/SpriteElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\nvar borderChange_js_1 = __webpack_require__(/*! ../actions/borderChange.js */ \"./src/actions/borderChange.js\");\nvar SpriteElement = /** @class */ (function () {\n    function SpriteElement(x, y, id) {\n        this.x = x;\n        this.y = y;\n        this.id = id;\n    }\n    SpriteElement.prototype.loadImage = function () {\n        var _this = this;\n        var canvas = document.createElement(\"canvas\");\n        var ctx = canvas.getContext(\"2d\");\n        canvas.addEventListener(\"click\", function () {\n            var clickedImg = new Image();\n            var currentChange = new Array();\n            variables_js_1.selectedMaps.forEach(function (e) {\n                var mapCtx = e.getContext(\"2d\");\n                clickedImg.addEventListener(\"load\", function () {\n                    mapCtx.drawImage(clickedImg, 0, 0);\n                    currentChange.push({ id: e.id, url: clickedImg.src });\n                }, false);\n                clickedImg.src = canvas.toDataURL();\n            });\n            variables_js_1.maps.splice(variables_js_1.maps.length - variables_js_1.undoCount, variables_js_1.undoCount);\n            variables_js_1.maps.push(currentChange);\n            (0, variables_js_1.setUndoCount)(0);\n            if (variables_js_1.automatic.checked === true) {\n                var lastElem = variables_js_1.selectedMaps.pop();\n                variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\n                var nextElem = (document.getElementById(\"\" + (parseInt(lastElem.id) + 1)));\n                variables_js_1.selectedMaps.push(nextElem);\n            }\n            else {\n                variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\n            }\n            (0, borderChange_js_1.borderChange)();\n        });\n        variables_js_1.img.addEventListener(\"load\", function () {\n            var w = variables_js_1.img.naturalWidth / 32;\n            var h = variables_js_1.img.naturalHeight / 20;\n            canvas.width = variables_js_1.s;\n            canvas.height = variables_js_1.s;\n            canvas.id = \"sprite\" + _this.id;\n            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(variables_js_1.img, _this.x * w + 1, _this.y * h + 1, w - 2, h - 2, 0, 0, variables_js_1.s, variables_js_1.s);\n            variables_js_1.sprites === null || variables_js_1.sprites === void 0 ? void 0 : variables_js_1.sprites.appendChild(canvas);\n        }, false);\n        variables_js_1.img.src = \"sprites.png\"; // Set source path\n    };\n    return SpriteElement;\n}());\nexports[\"default\"] = SpriteElement;\n\n\n//# sourceURL=webpack:///./src/classes/SpriteElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar MapElement_js_1 = __webpack_require__(/*! ./classes/MapElement.js */ \"./src/classes/MapElement.js\");\nvar SpriteElement_js_1 = __webpack_require__(/*! ./classes/SpriteElement.js */ \"./src/classes/SpriteElement.js\");\nvar operations_js_1 = __webpack_require__(/*! ./operations.js */ \"./src/operations.js\");\nvar variables_js_1 = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\nvar select_js_1 = __webpack_require__(/*! ./actions/select.js */ \"./src/actions/select.js\");\n(0, operations_js_1.operations)();\n(0, select_js_1.select)();\nwindow.onload = function () {\n    for (var j = 0; j < 20; j++) {\n        for (var i = 0; i < 16; i++) {\n            var elem = new SpriteElement_js_1.default(i, j, i + 1);\n            elem.loadImage();\n        }\n    }\n    for (var j = 0; j < 20; j++) {\n        for (var i = 16; i < 32; i++) {\n            var spriteElem = new SpriteElement_js_1.default(i, j, i + 1);\n            spriteElem.loadImage();\n        }\n    }\n    var num = Math.floor(variables_js_1.m / (variables_js_1.s + 4)) * 40;\n    for (var j = 0; j < num; j++) {\n        var mapElem = new MapElement_js_1.default(j + 1, \"\");\n        mapElem.loadMap();\n    }\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/operations.js":
/*!***************************!*\
  !*** ./src/operations.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.operations = void 0;\nvar save_js_1 = __webpack_require__(/*! ./operations/save.js */ \"./src/operations/save.js\");\nvar load_js_1 = __webpack_require__(/*! ./operations/load.js */ \"./src/operations/load.js\");\nvar clear_js_1 = __webpack_require__(/*! ./operations/clear.js */ \"./src/operations/clear.js\");\nvar undo_js_1 = __webpack_require__(/*! ./operations/undo.js */ \"./src/operations/undo.js\");\nvar redo_js_1 = __webpack_require__(/*! ./operations/redo.js */ \"./src/operations/redo.js\");\nvar copy_js_1 = __webpack_require__(/*! ./operations/copy.js */ \"./src/operations/copy.js\");\nvar variables_js_1 = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\nvar paste_js_1 = __webpack_require__(/*! ./operations/paste.js */ \"./src/operations/paste.js\");\nvar cut_js_1 = __webpack_require__(/*! ./operations/cut.js */ \"./src/operations/cut.js\");\nvar ContextMenu_js_1 = __webpack_require__(/*! ./classes/ContextMenu.js */ \"./src/classes/ContextMenu.js\");\nvar operations = function () {\n    var menu = new ContextMenu_js_1.ContextMenu(undo_js_1.undo, redo_js_1.redo, copy_js_1.copy, cut_js_1.cut, paste_js_1.paste, save_js_1.save, load_js_1.load);\n    variables_js_1.map.addEventListener(\"contextmenu\", function (e) {\n        e.preventDefault();\n        menu.show(e.pageX, e.pageY);\n        window.addEventListener(\"click\", menu.hide);\n        console.log(\"aaa\");\n    });\n    document.querySelector(\"body\").addEventListener(\"keydown\", function (e) {\n        e.preventDefault();\n        if (e.code === \"Delete\") {\n            (0, clear_js_1.clear)();\n        }\n        else if (e.code === \"KeyZ\" && e.ctrlKey) {\n            (0, undo_js_1.undo)();\n        }\n        else if (e.ctrlKey && e.code === \"KeyY\") {\n            (0, redo_js_1.redo)();\n        }\n        else if (e.ctrlKey && e.code === \"KeyS\") {\n            (0, save_js_1.save)();\n        }\n        else if (e.ctrlKey && e.code === \"KeyL\") {\n            (0, load_js_1.load)();\n        }\n        else if (e.ctrlKey && e.code === \"KeyC\") {\n            (0, copy_js_1.copy)(variables_js_1.selectedMaps);\n        }\n        else if (e.ctrlKey && e.code === \"KeyV\") {\n            (0, paste_js_1.paste)();\n        }\n        else if (e.ctrlKey && e.code === \"KeyX\") {\n            (0, cut_js_1.cut)(variables_js_1.selectedMaps);\n        }\n    });\n};\nexports.operations = operations;\n\n\n//# sourceURL=webpack:///./src/operations.js?");

/***/ }),

/***/ "./src/operations/clear.js":
/*!*********************************!*\
  !*** ./src/operations/clear.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.clear = void 0;\nvar borderChange_js_1 = __webpack_require__(/*! ../actions/borderChange.js */ \"./src/actions/borderChange.js\");\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\nvar clear = function () {\n    var currentChange = new Array();\n    variables_js_1.selectedMaps.forEach(function (e) {\n        var ctx = e.getContext(\"2d\");\n        ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);\n        var currentChangeElem = { id: e.id, url: e.toDataURL() };\n        currentChange.push(currentChangeElem);\n    });\n    variables_js_1.maps.splice(variables_js_1.maps.length - variables_js_1.undoCount, variables_js_1.undoCount);\n    variables_js_1.maps.push(currentChange);\n    variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\n    (0, variables_js_1.setUndoCount)(0);\n    (0, borderChange_js_1.borderChange)();\n};\nexports.clear = clear;\n\n\n//# sourceURL=webpack:///./src/operations/clear.js?");

/***/ }),

/***/ "./src/operations/copy.js":
/*!********************************!*\
  !*** ./src/operations/copy.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.copy = void 0;\nvar borderChange_js_1 = __webpack_require__(/*! ../actions/borderChange.js */ \"./src/actions/borderChange.js\");\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\nvar copy = function (selectedMaps) {\n    variables_js_1.copiedMaps.forEach(function (e) {\n        if (Array.from(document.querySelector(\"body\").children).includes(e)) {\n            document.querySelector(\"body\").removeChild(e);\n        }\n    });\n    variables_js_1.copiedMaps.splice(0, variables_js_1.copiedMaps.length);\n    (0, variables_js_1.setCopiedMaps)(selectedMaps, false);\n    selectedMaps.splice(0, selectedMaps.length);\n    (0, borderChange_js_1.borderChange)();\n};\nexports.copy = copy;\n\n\n//# sourceURL=webpack:///./src/operations/copy.js?");

/***/ }),

/***/ "./src/operations/cut.js":
/*!*******************************!*\
  !*** ./src/operations/cut.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.cut = void 0;\nvar borderChange_js_1 = __webpack_require__(/*! ../actions/borderChange.js */ \"./src/actions/borderChange.js\");\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\nvar clear_js_1 = __webpack_require__(/*! ./clear.js */ \"./src/operations/clear.js\");\nvar cut = function (selectedMaps) {\n    variables_js_1.copiedMaps.forEach(function (e) {\n        if (Array.from(document.querySelector(\"body\").children).includes(e)) {\n            document.querySelector(\"body\").removeChild(e);\n        }\n    });\n    variables_js_1.copiedMaps.splice(0, variables_js_1.copiedMaps.length);\n    (0, variables_js_1.setCopiedMaps)(selectedMaps, true);\n    (0, clear_js_1.clear)();\n    selectedMaps.splice(0, selectedMaps.length);\n    (0, borderChange_js_1.borderChange)();\n};\nexports.cut = cut;\n\n\n//# sourceURL=webpack:///./src/operations/cut.js?");

/***/ }),

/***/ "./src/operations/load.js":
/*!********************************!*\
  !*** ./src/operations/load.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.load = void 0;\nvar MapElement_js_1 = __webpack_require__(/*! ../classes/MapElement.js */ \"./src/classes/MapElement.js\");\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\nvar load = function () {\n    var fileInput = document.getElementById(\"fileInput\");\n    fileInput.click();\n    fileInput.onchange = function (e) {\n        if (fileInput.files) {\n            var file = fileInput.files[0];\n            if (!file) {\n                console.error(\"No file selected\");\n                return;\n            }\n            var reader_1 = new FileReader();\n            reader_1.readAsText(file);\n            reader_1.addEventListener(\"load\", function () {\n                var data = reader_1.result;\n                var arr = JSON.parse(data);\n                variables_js_1.map.innerHTML = \"\";\n                arr.forEach(function (e, i) {\n                    var mapElem = new MapElement_js_1.default(i, e);\n                    mapElem.loadMap();\n                });\n            });\n        }\n    };\n};\nexports.load = load;\n\n\n//# sourceURL=webpack:///./src/operations/load.js?");

/***/ }),

/***/ "./src/operations/paste.js":
/*!*********************************!*\
  !*** ./src/operations/paste.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.paste = void 0;\nvar borderChange_js_1 = __webpack_require__(/*! ../actions/borderChange.js */ \"./src/actions/borderChange.js\");\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\nvar paste = function () {\n    var selectedBounds = new Array();\n    var canvases = new Array();\n    var pasted = false;\n    if (variables_js_1.copiedMaps.length > 0) {\n        variables_js_1.copiedMaps.forEach(function (e) {\n            var eRect = e.getBoundingClientRect();\n            var bounds = {\n                left: eRect.left,\n                top: eRect.top,\n            };\n            selectedBounds.push(bounds);\n            var elemBound = {\n                left: eRect.left,\n                top: eRect.top,\n            };\n            var canvas = document.createElement(\"canvas\");\n            canvas.width = variables_js_1.s;\n            canvas.height = variables_js_1.s;\n            canvas.style.display = \"none\";\n            var ctx = canvas.getContext(\"2d\");\n            var img = new Image();\n            img.addEventListener(\"load\", function () {\n                ctx.drawImage(img, 0, 0);\n            });\n            img.src = e.toDataURL();\n            canvas.style.position = \"absolute\";\n            canvas.classList.add(\"paste\");\n            document.querySelector(\"body\").appendChild(canvas);\n            canvases.push({ canvas: canvas, bounds: elemBound });\n        });\n    }\n    var top = Math.min.apply(Math, selectedBounds.map(function (o) { return o.top; }));\n    var left = Math.min.apply(Math, selectedBounds.map(function (o) { return o.left; }));\n    var selectedCanvases = new Array();\n    var mapElemsBounds = new Array();\n    variables_js_1.mapsElems.forEach(function (e) {\n        var eRect = e.getBoundingClientRect();\n        var bounds = {\n            top: eRect.top,\n            left: eRect.left,\n        };\n        mapElemsBounds.push({ canvas: e, bounds: bounds });\n    });\n    var previousX = 0;\n    var previousY = 0;\n    variables_js_1.map.addEventListener(\"mousemove\", function (e) {\n        if (!pasted) {\n            variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\n        }\n        canvases.forEach(function (elem) {\n            var canvas = elem.canvas;\n            var bounds = elem.bounds;\n            var canvasLeft = e.pageX + (bounds.left - left);\n            var canvasTop = e.pageY + (bounds.top - top);\n            canvas.style.display = \"block\";\n            canvas.style.position = \"absolute\";\n            canvas.style.left = canvasLeft + \"px\";\n            canvas.style.top = canvasTop + \"px\";\n            mapElemsBounds.forEach(function (i) {\n                if (Math.abs(i.bounds.left - canvasLeft) < 5 &&\n                    Math.abs(i.bounds.top - canvasTop) < 5) {\n                    previousX = e.pageX;\n                    previousY = e.pageY;\n                    variables_js_1.selectedMaps.push(i.canvas);\n                    selectedCanvases.push(i.canvas);\n                }\n            });\n            (0, borderChange_js_1.borderChange)();\n        });\n    });\n    variables_js_1.map.addEventListener(\"click\", function () {\n        selectedCanvases = selectedCanvases.slice(-variables_js_1.copiedMaps.length);\n        console.log(\"klik\");\n        if (variables_js_1.copiedMaps.length > 0) {\n            selectedCanvases.forEach(function (e, i) {\n                var ctx = e.getContext(\"2d\");\n                var img = new Image();\n                img.addEventListener(\"load\", function () {\n                    ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);\n                    ctx.drawImage(img, 0, 0);\n                    canvases.splice(0, canvases.length);\n                    variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\n                    (0, borderChange_js_1.borderChange)();\n                    pasted = true;\n                    Array.from(document.getElementsByClassName(\"paste\")).forEach(function (elem) {\n                        document.querySelector(\"body\").removeChild(elem);\n                    });\n                });\n                img.src = variables_js_1.copiedMaps[i].toDataURL();\n            });\n        }\n    }, { once: true });\n    variables_js_1.map.addEventListener(\"mousedown\", function () {\n        selectedCanvases = selectedCanvases.slice(-variables_js_1.copiedMaps.length);\n        console.log(\"klik\");\n        if (variables_js_1.copiedMaps.length > 0) {\n            selectedCanvases.forEach(function (e, i) {\n                var ctx = e.getContext(\"2d\");\n                var img = new Image();\n                img.addEventListener(\"load\", function () {\n                    ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);\n                    ctx.drawImage(img, 0, 0);\n                    canvases.splice(0, canvases.length);\n                    variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\n                    (0, borderChange_js_1.borderChange)();\n                    pasted = true;\n                    Array.from(document.getElementsByClassName(\"paste\")).forEach(function (elem) {\n                        document.querySelector(\"body\").removeChild(elem);\n                    });\n                });\n                img.src = variables_js_1.copiedMaps[i].toDataURL();\n            });\n        }\n    }, { once: true });\n};\nexports.paste = paste;\n\n\n//# sourceURL=webpack:///./src/operations/paste.js?");

/***/ }),

/***/ "./src/operations/redo.js":
/*!********************************!*\
  !*** ./src/operations/redo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.redo = void 0;\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\nvar redo = function () {\n    if (variables_js_1.undoCount > 0) {\n        (0, variables_js_1.setUndoCount)(variables_js_1.undoCount - 1);\n        var redoImg_1 = new Image();\n        variables_js_1.maps[variables_js_1.maps.length - variables_js_1.undoCount - 1].forEach(function (e) {\n            var redoCanvas = document.getElementById(e.id);\n            var ctx = redoCanvas.getContext(\"2d\");\n            redoImg_1.src = e.url;\n            redoImg_1.addEventListener(\"load\", function () {\n                ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);\n                ctx.drawImage(redoImg_1, 0, 0);\n            });\n            // }\n        });\n    }\n};\nexports.redo = redo;\n\n\n//# sourceURL=webpack:///./src/operations/redo.js?");

/***/ }),

/***/ "./src/operations/save.js":
/*!********************************!*\
  !*** ./src/operations/save.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.save = void 0;\nvar save = function () {\n    var elems = Array.from(document.getElementsByClassName(\"mapElem\"));\n    var urls = new Array();\n    elems.forEach(function (e) {\n        urls.push(e.toDataURL());\n    });\n    var data = JSON.stringify(urls);\n    var type = \"application/json\";\n    var name = window.prompt(\"Filename\", \"\");\n    if (name) {\n        var filename = name + \".json\";\n        var blob = new Blob([data], { type: type });\n        var url_1 = URL.createObjectURL(blob);\n        var link = document.createElement(\"a\");\n        link.innerText = \"save\";\n        link.href = url_1;\n        link.download = filename;\n        document.body.appendChild(link);\n        link.click();\n        setTimeout(function () {\n            URL.revokeObjectURL(url_1);\n        }, 0);\n        document.body.removeChild(link);\n    }\n};\nexports.save = save;\n\n\n//# sourceURL=webpack:///./src/operations/save.js?");

/***/ }),

/***/ "./src/operations/undo.js":
/*!********************************!*\
  !*** ./src/operations/undo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.undo = void 0;\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\nvar undo = function () {\n    (0, variables_js_1.setUndoCount)(variables_js_1.undoCount + 1);\n    var undoImg = new Image();\n    variables_js_1.maps[variables_js_1.maps.length - variables_js_1.undoCount].forEach(function (e) {\n        var undoCanvas = document.getElementById(e.id);\n        var ctx = undoCanvas.getContext(\"2d\");\n        var clear = true;\n        for (var i = 0; i < variables_js_1.maps.length - variables_js_1.undoCount; i++) {\n            variables_js_1.maps[i].forEach(function (j) {\n                if (j.id === e.id) {\n                    if (clear) {\n                        clear = false;\n                        undoImg.src = j.url;\n                    }\n                }\n            });\n        }\n        if (clear) {\n            ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);\n        }\n        else {\n            undoImg.addEventListener(\"load\", function () {\n                ctx.drawImage(undoImg, 0, 0);\n            });\n        }\n    });\n};\nexports.undo = undo;\n\n\n//# sourceURL=webpack:///./src/operations/undo.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setCopiedMaps = exports.setUndoCount = exports.undoCount = exports.div = exports.maps = exports.mapsElems = exports.copiedMaps = exports.selectedMaps = exports.clickedSprite = exports.m = exports.s = exports.automatic = exports.img = exports.map = exports.sprites = void 0;\nexports.sprites = document.getElementById(\"sprites\");\nexports.map = document.getElementById(\"map\");\nexports.img = new Image();\nexports.automatic = (document.getElementById(\"automatic\"));\nexports.s = ((exports.sprites === null || exports.sprites === void 0 ? void 0 : exports.sprites.offsetWidth) !== undefined ? (exports.sprites === null || exports.sprites === void 0 ? void 0 : exports.sprites.offsetWidth) - 64 : 0) / 16;\nexports.m = (exports.map === null || exports.map === void 0 ? void 0 : exports.map.offsetWidth) !== undefined ? exports.map === null || exports.map === void 0 ? void 0 : exports.map.offsetWidth : 0;\nexports.selectedMaps = new Array();\nexports.copiedMaps = new Array();\nexports.mapsElems = new Array();\nexports.maps = new Array();\nexports.div = document.createElement(\"div\");\nexports.undoCount = 0;\nvar setUndoCount = function (x) {\n    exports.undoCount = x;\n};\nexports.setUndoCount = setUndoCount;\nvar setCopiedMaps = function (maps, cut) {\n    if (cut) {\n        maps.forEach(function (e) {\n            var canvas = document.createElement(\"canvas\");\n            canvas.width = exports.s;\n            canvas.height = exports.s;\n            canvas.style.position = \"absolute\";\n            canvas.style.top = e.getBoundingClientRect().top + \"px\";\n            canvas.style.left = e.getBoundingClientRect().left + \"px\";\n            canvas.style.opacity = \"0\";\n            var ctx = canvas.getContext(\"2d\");\n            var img = new Image();\n            img.addEventListener(\"load\", function () {\n                ctx.drawImage(img, 0, 0);\n            });\n            document.querySelector(\"body\").appendChild(canvas);\n            var bound = canvas.getBoundingClientRect();\n            img.src = e.toDataURL();\n            exports.copiedMaps.push(canvas);\n        });\n    }\n    else {\n        maps.forEach(function (e) {\n            exports.copiedMaps.push(e);\n        });\n    }\n};\nexports.setCopiedMaps = setCopiedMaps;\n\n\n//# sourceURL=webpack:///./src/variables.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;