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

/***/ "./src/actions/borderChange.js":
/*!*************************************!*\
  !*** ./src/actions/borderChange.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.borderChange = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\r\nvar borderChange = function () {\r\n    variables_js_1.mapsElems.forEach(function (e) {\r\n        if (e !== null) {\r\n            e.style.borderColor = \"whitesmoke\";\r\n        }\r\n    });\r\n    variables_js_1.selectedMaps.forEach(function (e) {\r\n        if (e !== null) {\r\n            e.style.borderColor = \"red\";\r\n        }\r\n    });\r\n};\r\nexports.borderChange = borderChange;\r\n\n\n//# sourceURL=webpack:///./src/actions/borderChange.js?");

/***/ }),

/***/ "./src/actions/select.js":
/*!*******************************!*\
  !*** ./src/actions/select.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.select = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\r\nvar borderChange_js_1 = __webpack_require__(/*! ./borderChange.js */ \"./src/actions/borderChange.js\");\r\nvar startX = 0;\r\nvar startY = 0;\r\nvar draw = false;\r\nvar div = document.createElement(\"div\");\r\ndocument.querySelector(\"#right\").appendChild(div);\r\nvar select = function () {\r\n    variables_js_1.map.addEventListener(\"mousedown\", function (e) {\r\n        e.preventDefault();\r\n        if (!e.ctrlKey) {\r\n            variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\r\n            (0, borderChange_js_1.borderChange)();\r\n        }\r\n        div.style.display = \"block\";\r\n        div.style.position = \"absolute\";\r\n        div.style.left = e.pageX + \"px\";\r\n        div.style.top = e.pageY + \"px\";\r\n        startX = e.pageX;\r\n        startY = e.pageY;\r\n        div.style.zIndex = \"1000\";\r\n        div.style.background = \"rgba(93, 185, 227,0.7)\";\r\n        div.style.border = \"1px dashed blue\";\r\n        div.style.width = \"0px\";\r\n        div.style.height = \"0px\";\r\n        draw = true;\r\n    });\r\n    variables_js_1.map.addEventListener(\"mousemove\", function (e) {\r\n        if (draw) {\r\n            if (startX > e.pageX) {\r\n                div.style.left = e.pageX + \"px\";\r\n            }\r\n            else {\r\n                div.style.left = startX + \"px\";\r\n            }\r\n            if (startY > e.pageY) {\r\n                div.style.top = e.pageY + \"px\";\r\n            }\r\n            else {\r\n                div.style.top = startY + \"px\";\r\n            }\r\n            div.style.width = Math.abs(startX - e.pageX) + \"px\";\r\n            div.style.height = Math.abs(startY - e.pageY) + \"px\";\r\n        }\r\n    });\r\n    div.addEventListener(\"mousemove\", function (e) {\r\n        if (draw) {\r\n            if (startX > e.pageX) {\r\n                div.style.left = e.pageX + \"px\";\r\n            }\r\n            else {\r\n                div.style.left = startX + \"px\";\r\n            }\r\n            if (startY > e.pageY) {\r\n                div.style.top = e.pageY + \"px\";\r\n            }\r\n            else {\r\n                div.style.top = startY + \"px\";\r\n            }\r\n            div.style.width = Math.abs(startX - e.pageX) + \"px\";\r\n            div.style.height = Math.abs(startY - e.pageY) + \"px\";\r\n        }\r\n    });\r\n    window.addEventListener(\"mouseup\", function () {\r\n        draw = false;\r\n        var divRect = div.getBoundingClientRect();\r\n        variables_js_1.mapsElems.forEach(function (e) {\r\n            var elemRect = e.getBoundingClientRect();\r\n            var l = divRect.left;\r\n            var r = divRect.right;\r\n            var t = divRect.top;\r\n            var b = divRect.bottom;\r\n            var xOverlap = elemRect.left < r && elemRect.right > l;\r\n            var yOverlap = elemRect.top < b && elemRect.bottom > t;\r\n            var xInside = elemRect.left >= l && elemRect.right <= r;\r\n            var yInside = elemRect.top >= t && elemRect.bottom <= b;\r\n            if (xOverlap &&\r\n                yOverlap &&\r\n                (xInside ||\r\n                    yInside ||\r\n                    (elemRect.bottom > t &&\r\n                        elemRect.top < t &&\r\n                        (elemRect.right > l || elemRect.left < r)) ||\r\n                    (elemRect.top < b &&\r\n                        elemRect.bottom > b &&\r\n                        (elemRect.right > l || elemRect.left < r)))) {\r\n                variables_js_1.selectedMaps.push(e);\r\n            }\r\n        });\r\n        (0, borderChange_js_1.borderChange)();\r\n        div.style.display = \"none\";\r\n    });\r\n};\r\nexports.select = select;\r\n\n\n//# sourceURL=webpack:///./src/actions/select.js?");

/***/ }),

/***/ "./src/classes/MapElement.js":
/*!***********************************!*\
  !*** ./src/classes/MapElement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\r\nvar borderChange_js_1 = __webpack_require__(/*! ../actions/borderChange.js */ \"./src/actions/borderChange.js\");\r\nvar MapElement = /** @class */ (function () {\r\n    function MapElement(id, url) {\r\n        this.id = id;\r\n        this.url = url;\r\n    }\r\n    MapElement.prototype.loadMap = function () {\r\n        var canvas = document.createElement(\"canvas\");\r\n        var ctx = canvas.getContext(\"2d\");\r\n        canvas.classList.add(\"mapElem\");\r\n        canvas.width = variables_js_1.s;\r\n        canvas.height = variables_js_1.s;\r\n        canvas.id = \"\" + this.id;\r\n        variables_js_1.mapsElems.push(canvas);\r\n        if (this.url !== \"\") {\r\n            var img_1 = new Image();\r\n            img_1.addEventListener(\"load\", function () {\r\n                ctx.drawImage(img_1, 0, 0);\r\n            });\r\n            img_1.src = this.url;\r\n        }\r\n        canvas.addEventListener(\"click\", function (e) {\r\n            if (!e.ctrlKey) {\r\n                variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\r\n            }\r\n            variables_js_1.selectedMaps.push(canvas);\r\n            (0, borderChange_js_1.borderChange)();\r\n            //   ctx.drawImage(clickedSprite, 0, 0);\r\n        });\r\n        variables_js_1.map === null || variables_js_1.map === void 0 ? void 0 : variables_js_1.map.appendChild(canvas);\r\n    };\r\n    return MapElement;\r\n}());\r\nexports[\"default\"] = MapElement;\r\n\n\n//# sourceURL=webpack:///./src/classes/MapElement.js?");

/***/ }),

/***/ "./src/classes/SpriteElement.js":
/*!**************************************!*\
  !*** ./src/classes/SpriteElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\r\nvar borderChange_js_1 = __webpack_require__(/*! ../actions/borderChange.js */ \"./src/actions/borderChange.js\");\r\nvar SpriteElement = /** @class */ (function () {\r\n    function SpriteElement(x, y, id) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.id = id;\r\n    }\r\n    SpriteElement.prototype.loadImage = function () {\r\n        var _this = this;\r\n        var canvas = document.createElement(\"canvas\");\r\n        var ctx = canvas.getContext(\"2d\");\r\n        canvas.addEventListener(\"click\", function () {\r\n            var clickedImg = new Image();\r\n            var currentChange = new Array();\r\n            variables_js_1.selectedMaps.forEach(function (e) {\r\n                var mapCtx = e.getContext(\"2d\");\r\n                clickedImg.addEventListener(\"load\", function () {\r\n                    mapCtx.drawImage(clickedImg, 0, 0);\r\n                    currentChange.push({ id: e.id, url: clickedImg.src });\r\n                }, false);\r\n                clickedImg.src = canvas.toDataURL();\r\n            });\r\n            variables_js_1.maps.splice(variables_js_1.maps.length - variables_js_1.undoCount, variables_js_1.undoCount);\r\n            variables_js_1.maps.push(currentChange);\r\n            // maps.push(currentMap);\r\n            (0, variables_js_1.setUndoCount)(0);\r\n            if (variables_js_1.automatic.checked === true) {\r\n                var lastElem = variables_js_1.selectedMaps.pop();\r\n                variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\r\n                // console.log(lastElem);\r\n                var nextElem = (document.getElementById(\"\" + (parseInt(lastElem.id) + 1)));\r\n                variables_js_1.selectedMaps.push(nextElem);\r\n                // console.log(selectedMaps);\r\n            }\r\n            else {\r\n                variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\r\n            }\r\n            (0, borderChange_js_1.borderChange)();\r\n        });\r\n        // console.log(this.x, this.y);\r\n        variables_js_1.img.addEventListener(\"load\", function () {\r\n            var w = variables_js_1.img.naturalWidth / 32;\r\n            var h = variables_js_1.img.naturalHeight / 20;\r\n            canvas.width = variables_js_1.s;\r\n            canvas.height = variables_js_1.s;\r\n            canvas.id = \"sprite\" + _this.id;\r\n            // ctx?.clearRect(w, h, this.x * w, this.y * h);\r\n            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(variables_js_1.img, _this.x * w + 1, _this.y * h + 1, w - 2, h - 2, 0, 0, variables_js_1.s, variables_js_1.s);\r\n            variables_js_1.sprites === null || variables_js_1.sprites === void 0 ? void 0 : variables_js_1.sprites.appendChild(canvas);\r\n        }, false);\r\n        variables_js_1.img.src = \"sprites.png\"; // Set source path\r\n        // console.log(this.x*w, this.y*h,w, h);\r\n    };\r\n    return SpriteElement;\r\n}());\r\nexports[\"default\"] = SpriteElement;\r\n\n\n//# sourceURL=webpack:///./src/classes/SpriteElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar MapElement_js_1 = __webpack_require__(/*! ./classes/MapElement.js */ \"./src/classes/MapElement.js\");\r\nvar SpriteElement_js_1 = __webpack_require__(/*! ./classes/SpriteElement.js */ \"./src/classes/SpriteElement.js\");\r\nvar operations_js_1 = __webpack_require__(/*! ./operations.js */ \"./src/operations.js\");\r\nvar variables_js_1 = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\r\nvar select_js_1 = __webpack_require__(/*! ./actions/select.js */ \"./src/actions/select.js\");\r\n(0, operations_js_1.operations)();\r\n(0, select_js_1.select)();\r\nwindow.onload = function () {\r\n    for (var j = 0; j < 20; j++) {\r\n        for (var i = 0; i < 16; i++) {\r\n            var elem = new SpriteElement_js_1.default(i, j, i + 1);\r\n            elem.loadImage();\r\n        }\r\n    }\r\n    for (var j = 0; j < 20; j++) {\r\n        for (var i = 16; i < 32; i++) {\r\n            var spriteElem = new SpriteElement_js_1.default(i, j, i + 1);\r\n            spriteElem.loadImage();\r\n        }\r\n    }\r\n    var num = Math.floor(variables_js_1.m / (variables_js_1.s + 4)) * 40;\r\n    for (var j = 0; j < num; j++) {\r\n        var mapElem = new MapElement_js_1.default(j + 1, \"\");\r\n        mapElem.loadMap();\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/operations.js":
/*!***************************!*\
  !*** ./src/operations.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.operations = void 0;\r\nvar save_js_1 = __webpack_require__(/*! ./operations/save.js */ \"./src/operations/save.js\");\r\nvar load_js_1 = __webpack_require__(/*! ./operations/load.js */ \"./src/operations/load.js\");\r\nvar clear_js_1 = __webpack_require__(/*! ./operations/clear.js */ \"./src/operations/clear.js\");\r\nvar undo_js_1 = __webpack_require__(/*! ./operations/undo.js */ \"./src/operations/undo.js\");\r\nvar redo_js_1 = __webpack_require__(/*! ./operations/redo.js */ \"./src/operations/redo.js\");\r\nvar copy_js_1 = __webpack_require__(/*! ./operations/copy.js */ \"./src/operations/copy.js\");\r\nvar variables_js_1 = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\r\nvar paste_js_1 = __webpack_require__(/*! ./operations/paste.js */ \"./src/operations/paste.js\");\r\nvar operations = function () {\r\n    document.querySelector(\"body\").addEventListener(\"keydown\", function (e) {\r\n        e.preventDefault();\r\n        if (e.code === \"Delete\") {\r\n            (0, clear_js_1.clear)();\r\n        }\r\n        else if (e.code === \"KeyZ\" && e.ctrlKey) {\r\n            (0, undo_js_1.undo)();\r\n        }\r\n        else if (e.ctrlKey && e.code === \"KeyY\") {\r\n            (0, redo_js_1.redo)();\r\n        }\r\n        else if (e.ctrlKey && e.code === \"KeyS\") {\r\n            (0, save_js_1.save)();\r\n        }\r\n        else if (e.ctrlKey && e.code === \"KeyL\") {\r\n            (0, load_js_1.load)();\r\n        }\r\n        else if (e.ctrlKey && e.code === \"KeyC\") {\r\n            (0, copy_js_1.copy)(variables_js_1.selectedMaps);\r\n        }\r\n        else if (e.ctrlKey && e.code === \"KeyV\") {\r\n            (0, paste_js_1.paste)();\r\n        }\r\n    });\r\n};\r\nexports.operations = operations;\r\n\n\n//# sourceURL=webpack:///./src/operations.js?");

/***/ }),

/***/ "./src/operations/clear.js":
/*!*********************************!*\
  !*** ./src/operations/clear.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.clear = void 0;\r\nvar borderChange_js_1 = __webpack_require__(/*! ../actions/borderChange.js */ \"./src/actions/borderChange.js\");\r\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\r\nvar clear = function () {\r\n    var currentChange = new Array();\r\n    variables_js_1.selectedMaps.forEach(function (e) {\r\n        var ctx = e.getContext(\"2d\");\r\n        ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);\r\n        var currentChangeElem = { id: e.id, url: e.toDataURL() };\r\n        currentChange.push(currentChangeElem);\r\n    });\r\n    variables_js_1.maps.splice(variables_js_1.maps.length - variables_js_1.undoCount, variables_js_1.undoCount);\r\n    variables_js_1.maps.push(currentChange);\r\n    variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\r\n    (0, variables_js_1.setUndoCount)(0);\r\n    (0, borderChange_js_1.borderChange)();\r\n};\r\nexports.clear = clear;\r\n\n\n//# sourceURL=webpack:///./src/operations/clear.js?");

/***/ }),

/***/ "./src/operations/copy.js":
/*!********************************!*\
  !*** ./src/operations/copy.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.copy = void 0;\r\nvar borderChange_js_1 = __webpack_require__(/*! ../actions/borderChange.js */ \"./src/actions/borderChange.js\");\r\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\r\nvar copy = function (selectedMaps) {\r\n    (0, variables_js_1.setCopiedMaps)(selectedMaps);\r\n    selectedMaps.splice(0, selectedMaps.length);\r\n    (0, borderChange_js_1.borderChange)();\r\n};\r\nexports.copy = copy;\r\n\n\n//# sourceURL=webpack:///./src/operations/copy.js?");

/***/ }),

/***/ "./src/operations/load.js":
/*!********************************!*\
  !*** ./src/operations/load.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.load = void 0;\r\nvar MapElement_js_1 = __webpack_require__(/*! ../classes/MapElement.js */ \"./src/classes/MapElement.js\");\r\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\r\nvar load = function () {\r\n    var fileInput = document.getElementById(\"fileInput\");\r\n    fileInput.click();\r\n    fileInput.onchange = function (e) {\r\n        if (fileInput.files) {\r\n            var file = fileInput.files[0];\r\n            if (!file) {\r\n                console.error(\"No file selected\");\r\n                return;\r\n            }\r\n            var reader_1 = new FileReader();\r\n            reader_1.readAsText(file);\r\n            reader_1.addEventListener(\"load\", function () {\r\n                var data = reader_1.result;\r\n                var arr = JSON.parse(data);\r\n                variables_js_1.map.innerHTML = \"\";\r\n                arr.forEach(function (e, i) {\r\n                    var mapElem = new MapElement_js_1.default(i, e);\r\n                    mapElem.loadMap();\r\n                });\r\n            });\r\n        }\r\n    };\r\n};\r\nexports.load = load;\r\n\n\n//# sourceURL=webpack:///./src/operations/load.js?");

/***/ }),

/***/ "./src/operations/paste.js":
/*!*********************************!*\
  !*** ./src/operations/paste.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.paste = void 0;\r\nvar borderChange_js_1 = __webpack_require__(/*! ../actions/borderChange.js */ \"./src/actions/borderChange.js\");\r\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\r\nvar paste = function () {\r\n    var selectedBounds = new Array();\r\n    var canvases = new Array();\r\n    if (variables_js_1.copiedMaps.length > 0) {\r\n        variables_js_1.copiedMaps.forEach(function (e) {\r\n            var eRect = e.getBoundingClientRect();\r\n            var bounds = {\r\n                left: eRect.left,\r\n                top: eRect.top,\r\n                right: eRect.right,\r\n                bottom: eRect.bottom,\r\n            };\r\n            selectedBounds.push(bounds);\r\n            var elemBound = {\r\n                left: eRect.left,\r\n                top: eRect.top,\r\n                right: eRect.right,\r\n                bottom: eRect.bottom,\r\n            };\r\n            var canvas = document.createElement(\"canvas\");\r\n            canvas.width = variables_js_1.s;\r\n            canvas.height = variables_js_1.s;\r\n            canvas.style.display = \"none\";\r\n            var ctx = canvas.getContext(\"2d\");\r\n            var img = new Image();\r\n            img.addEventListener(\"load\", function () {\r\n                ctx.drawImage(img, 0, 0);\r\n            });\r\n            img.src = e.toDataURL();\r\n            canvas.style.position = \"absolute\";\r\n            canvas.classList.add(\"paste\");\r\n            document.querySelector(\"body\").appendChild(canvas);\r\n            canvases.push({ canvas: canvas, bounds: elemBound });\r\n        });\r\n    }\r\n    var top = Math.min.apply(Math, selectedBounds.map(function (o) { return o.top; }));\r\n    var left = Math.min.apply(Math, selectedBounds.map(function (o) { return o.left; }));\r\n    var selectedCanvases = new Array();\r\n    var mapElemsBounds = new Array();\r\n    variables_js_1.mapsElems.forEach(function (e) {\r\n        var eRect = e.getBoundingClientRect();\r\n        var bounds = {\r\n            top: eRect.top,\r\n            left: eRect.left,\r\n            right: eRect.right,\r\n            bottom: eRect.bottom,\r\n        };\r\n        mapElemsBounds.push({ canvas: e, bounds: bounds });\r\n    });\r\n    var previousX = 0;\r\n    var previousY = 0;\r\n    variables_js_1.map.addEventListener(\"mousemove\", function (e) {\r\n        variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\r\n        canvases.forEach(function (elem) {\r\n            var canvas = elem.canvas;\r\n            var bounds = elem.bounds;\r\n            var canvasLeft = e.pageX + (bounds.left - left);\r\n            var canvasTop = e.pageY + (bounds.top - top);\r\n            canvas.style.display = \"block\";\r\n            canvas.style.position = \"absolute\";\r\n            canvas.style.left = canvasLeft + \"px\";\r\n            canvas.style.top = canvasTop + \"px\";\r\n            mapElemsBounds.forEach(function (i) {\r\n                if (Math.abs(i.bounds.left - canvasLeft) < 5 &&\r\n                    Math.abs(i.bounds.top - canvasTop) < 5) {\r\n                    previousX = e.pageX;\r\n                    previousY = e.pageY;\r\n                    variables_js_1.selectedMaps.push(i.canvas);\r\n                    selectedCanvases.push(i.canvas);\r\n                    console.log(variables_js_1.selectedMaps.length);\r\n                }\r\n            });\r\n            (0, borderChange_js_1.borderChange)();\r\n        });\r\n    });\r\n    variables_js_1.map.addEventListener(\"click\", function () {\r\n        console.log(selectedCanvases.length);\r\n        selectedCanvases = selectedCanvases.slice(-variables_js_1.copiedMaps.length);\r\n        console.log(selectedCanvases.length);\r\n        if (variables_js_1.copiedMaps.length > 0) {\r\n            selectedCanvases.forEach(function (e, i) {\r\n                var ctx = e.getContext(\"2d\");\r\n                var img = new Image();\r\n                img.addEventListener(\"load\", function () {\r\n                    ctx.drawImage(img, 0, 0);\r\n                    variables_js_1.copiedMaps.splice(0, variables_js_1.copiedMaps.length);\r\n                    canvases.splice(0, canvases.length);\r\n                    variables_js_1.selectedMaps.splice(0, variables_js_1.selectedMaps.length);\r\n                    (0, borderChange_js_1.borderChange)();\r\n                    Array.from(document.getElementsByClassName(\"paste\")).forEach(function (elem) {\r\n                        document.querySelector(\"body\").removeChild(elem);\r\n                    });\r\n                });\r\n                img.src = variables_js_1.copiedMaps[i].toDataURL();\r\n            });\r\n        }\r\n    });\r\n};\r\nexports.paste = paste;\r\n\n\n//# sourceURL=webpack:///./src/operations/paste.js?");

/***/ }),

/***/ "./src/operations/redo.js":
/*!********************************!*\
  !*** ./src/operations/redo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.redo = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\r\nvar redo = function () {\r\n    if (variables_js_1.undoCount > 0) {\r\n        (0, variables_js_1.setUndoCount)(variables_js_1.undoCount - 1);\r\n        // console.log(undoCount);\r\n        var redoImg_1 = new Image();\r\n        //   console.log(maps[maps.length - undoCount - 1]);\r\n        variables_js_1.maps[variables_js_1.maps.length - variables_js_1.undoCount - 1].forEach(function (e) {\r\n            var redoCanvas = document.getElementById(e.id);\r\n            var ctx = redoCanvas.getContext(\"2d\");\r\n            redoImg_1.src = e.url;\r\n            redoImg_1.addEventListener(\"load\", function () {\r\n                ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);\r\n                ctx.drawImage(redoImg_1, 0, 0);\r\n            });\r\n            // }\r\n        });\r\n    }\r\n};\r\nexports.redo = redo;\r\n\n\n//# sourceURL=webpack:///./src/operations/redo.js?");

/***/ }),

/***/ "./src/operations/save.js":
/*!********************************!*\
  !*** ./src/operations/save.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.save = void 0;\r\nvar save = function () {\r\n    var elems = Array.from(document.getElementsByClassName(\"mapElem\"));\r\n    var urls = new Array();\r\n    elems.forEach(function (e) {\r\n        urls.push(e.toDataURL());\r\n    });\r\n    var data = JSON.stringify(urls);\r\n    var type = \"application/json\";\r\n    var name = window.prompt(\"Filename\", \"\");\r\n    if (name) {\r\n        var filename = name + \".json\";\r\n        var blob = new Blob([data], { type: type });\r\n        var url_1 = URL.createObjectURL(blob);\r\n        var link = document.createElement(\"a\");\r\n        link.innerText = \"save\";\r\n        link.href = url_1;\r\n        link.download = filename;\r\n        document.body.appendChild(link);\r\n        link.click();\r\n        setTimeout(function () {\r\n            URL.revokeObjectURL(url_1);\r\n        }, 0);\r\n        document.body.removeChild(link);\r\n    }\r\n};\r\nexports.save = save;\r\n\n\n//# sourceURL=webpack:///./src/operations/save.js?");

/***/ }),

/***/ "./src/operations/undo.js":
/*!********************************!*\
  !*** ./src/operations/undo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.undo = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ../variables.js */ \"./src/variables.js\");\r\nvar undo = function () {\r\n    (0, variables_js_1.setUndoCount)(variables_js_1.undoCount + 1);\r\n    var undoImg = new Image();\r\n    variables_js_1.maps[variables_js_1.maps.length - variables_js_1.undoCount].forEach(function (e) {\r\n        var undoCanvas = document.getElementById(e.id);\r\n        var ctx = undoCanvas.getContext(\"2d\");\r\n        var clear = true;\r\n        for (var i = 0; i < variables_js_1.maps.length - variables_js_1.undoCount; i++) {\r\n            variables_js_1.maps[i].forEach(function (j) {\r\n                if (j.id === e.id) {\r\n                    if (clear) {\r\n                        clear = false;\r\n                        undoImg.src = j.url;\r\n                    }\r\n                }\r\n            });\r\n        }\r\n        if (clear) {\r\n            ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);\r\n        }\r\n        else {\r\n            undoImg.addEventListener(\"load\", function () {\r\n                ctx.drawImage(undoImg, 0, 0);\r\n            });\r\n        }\r\n    });\r\n};\r\nexports.undo = undo;\r\n\n\n//# sourceURL=webpack:///./src/operations/undo.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.setCopiedMaps = exports.setUndoCount = exports.undoCount = exports.div = exports.maps = exports.mapsElems = exports.copiedMaps = exports.selectedMaps = exports.clickedSprite = exports.m = exports.s = exports.automatic = exports.img = exports.map = exports.sprites = void 0;\r\nexports.sprites = document.getElementById(\"sprites\");\r\nexports.map = document.getElementById(\"map\");\r\nexports.img = new Image();\r\nexports.automatic = (document.getElementById(\"automatic\"));\r\nexports.s = ((exports.sprites === null || exports.sprites === void 0 ? void 0 : exports.sprites.offsetWidth) !== undefined ? (exports.sprites === null || exports.sprites === void 0 ? void 0 : exports.sprites.offsetWidth) - 64 : 0) / 16;\r\nexports.m = (exports.map === null || exports.map === void 0 ? void 0 : exports.map.offsetWidth) !== undefined ? exports.map === null || exports.map === void 0 ? void 0 : exports.map.offsetWidth : 0;\r\nexports.selectedMaps = new Array();\r\nexports.copiedMaps = new Array();\r\nexports.mapsElems = new Array();\r\nexports.maps = new Array();\r\nexports.div = document.createElement(\"div\");\r\nexports.undoCount = 0;\r\nvar setUndoCount = function (x) {\r\n    exports.undoCount = x;\r\n};\r\nexports.setUndoCount = setUndoCount;\r\nvar setCopiedMaps = function (maps) {\r\n    exports.copiedMaps.splice(0, exports.copiedMaps.length);\r\n    maps.forEach(function (e) {\r\n        exports.copiedMaps.push(e);\r\n    });\r\n};\r\nexports.setCopiedMaps = setCopiedMaps;\r\n\n\n//# sourceURL=webpack:///./src/variables.js?");

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