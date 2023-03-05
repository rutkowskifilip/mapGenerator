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

/***/ "./src/MapElement.ts":
/*!***************************!*\
  !*** ./src/MapElement.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst variables_js_1 = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\r\nconst borderChange_js_1 = __webpack_require__(/*! ./borderChange.js */ \"./src/borderChange.js\");\r\nclass MapElement {\r\n    constructor(id, url) {\r\n        this.id = id;\r\n        this.url = url;\r\n    }\r\n    loadMap() {\r\n        const canvas = document.createElement(\"canvas\");\r\n        const ctx = canvas.getContext(\"2d\");\r\n        canvas.classList.add(\"mapElem\");\r\n        canvas.width = variables_js_1.s;\r\n        canvas.height = variables_js_1.s;\r\n        canvas.id = \"\" + this.id;\r\n        variables_js_1.mapsElems.push(canvas);\r\n        if (this.url !== \"\") {\r\n            const img = new Image();\r\n            img.addEventListener(\"load\", () => {\r\n                ctx.drawImage(img, 0, 0);\r\n            });\r\n            img.src = this.url;\r\n        }\r\n        canvas.addEventListener(\"click\", (e) => {\r\n            if (!e.ctrlKey) {\r\n                variables_js_1.mapsToDraw.splice(0, variables_js_1.mapsToDraw.length);\r\n            }\r\n            variables_js_1.mapsToDraw.push(canvas);\r\n            (0, borderChange_js_1.borderChange)();\r\n            //   ctx.drawImage(clickedSprite, 0, 0);\r\n        });\r\n        variables_js_1.map === null || variables_js_1.map === void 0 ? void 0 : variables_js_1.map.appendChild(canvas);\r\n    }\r\n}\r\nexports[\"default\"] = MapElement;\r\n\n\n//# sourceURL=webpack:///./src/MapElement.ts?");

/***/ }),

/***/ "./src/variables.ts":
/*!**************************!*\
  !*** ./src/variables.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.setUndoCount = exports.undoCount = exports.div = exports.maps = exports.mapsElems = exports.mapsToDraw = exports.clickedSprite = exports.m = exports.s = exports.automatic = exports.img = exports.map = exports.sprites = void 0;\r\nexports.sprites = document.getElementById(\"sprites\");\r\nexports.map = document.getElementById(\"map\");\r\nexports.img = new Image();\r\nexports.automatic = (document.getElementById(\"automatic\"));\r\nexports.s = ((exports.sprites === null || exports.sprites === void 0 ? void 0 : exports.sprites.offsetWidth) !== undefined ? (exports.sprites === null || exports.sprites === void 0 ? void 0 : exports.sprites.offsetWidth) - 64 : 0) / 16;\r\nexports.m = (exports.map === null || exports.map === void 0 ? void 0 : exports.map.offsetWidth) !== undefined ? exports.map === null || exports.map === void 0 ? void 0 : exports.map.offsetWidth : 0;\r\nexports.mapsToDraw = new Array();\r\nexports.mapsElems = new Array();\r\nexports.maps = new Array();\r\nexports.div = document.createElement(\"div\");\r\nexports.undoCount = 0;\r\nconst setUndoCount = (x) => {\r\n    exports.undoCount = x;\r\n};\r\nexports.setUndoCount = setUndoCount;\r\n\n\n//# sourceURL=webpack:///./src/variables.ts?");

/***/ }),

/***/ "./src/MapElement.js":
/*!***************************!*\
  !*** ./src/MapElement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar variables_js_1 = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\r\nvar borderChange_js_1 = __webpack_require__(/*! ./borderChange.js */ \"./src/borderChange.js\");\r\nvar MapElement = /** @class */ (function () {\r\n    function MapElement(id, url) {\r\n        this.id = id;\r\n        this.url = url;\r\n    }\r\n    MapElement.prototype.loadMap = function () {\r\n        var canvas = document.createElement(\"canvas\");\r\n        var ctx = canvas.getContext(\"2d\");\r\n        canvas.classList.add(\"mapElem\");\r\n        canvas.width = variables_js_1.s;\r\n        canvas.height = variables_js_1.s;\r\n        canvas.id = \"\" + this.id;\r\n        variables_js_1.mapsElems.push(canvas);\r\n        if (this.url !== \"\") {\r\n            var img_1 = new Image();\r\n            img_1.addEventListener(\"load\", function () {\r\n                ctx.drawImage(img_1, 0, 0);\r\n            });\r\n            img_1.src = this.url;\r\n        }\r\n        canvas.addEventListener(\"click\", function (e) {\r\n            if (!e.ctrlKey) {\r\n                variables_js_1.mapsToDraw.splice(0, variables_js_1.mapsToDraw.length);\r\n            }\r\n            variables_js_1.mapsToDraw.push(canvas);\r\n            (0, borderChange_js_1.borderChange)();\r\n            //   ctx.drawImage(clickedSprite, 0, 0);\r\n        });\r\n        variables_js_1.map === null || variables_js_1.map === void 0 ? void 0 : variables_js_1.map.appendChild(canvas);\r\n    };\r\n    return MapElement;\r\n}());\r\nexports[\"default\"] = MapElement;\r\n\n\n//# sourceURL=webpack:///./src/MapElement.js?");

/***/ }),

/***/ "./src/SpriteElement.js":
/*!******************************!*\
  !*** ./src/SpriteElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar variables_js_1 = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\r\nvar borderChange_js_1 = __webpack_require__(/*! ./borderChange.js */ \"./src/borderChange.js\");\r\nvar SpriteElement = /** @class */ (function () {\r\n    function SpriteElement(x, y, id) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.id = id;\r\n    }\r\n    SpriteElement.prototype.loadImage = function () {\r\n        var _this = this;\r\n        var canvas = document.createElement(\"canvas\");\r\n        var ctx = canvas.getContext(\"2d\");\r\n        canvas.addEventListener(\"click\", function () {\r\n            var clickedImg = new Image();\r\n            var currentChange = new Array();\r\n            variables_js_1.mapsToDraw.forEach(function (e) {\r\n                var mapCtx = e.getContext(\"2d\");\r\n                clickedImg.addEventListener(\"load\", function () {\r\n                    mapCtx.drawImage(clickedImg, 0, 0);\r\n                    currentChange.push({ id: e.id, url: clickedImg.src });\r\n                }, false);\r\n                clickedImg.src = canvas.toDataURL();\r\n            });\r\n            variables_js_1.maps.splice(variables_js_1.maps.length - variables_js_1.undoCount, variables_js_1.undoCount);\r\n            variables_js_1.maps.push(currentChange);\r\n            // maps.push(currentMap);\r\n            (0, variables_js_1.setUndoCount)(0);\r\n            if (variables_js_1.automatic.checked === true) {\r\n                var lastElem = variables_js_1.mapsToDraw.pop();\r\n                variables_js_1.mapsToDraw.splice(0, variables_js_1.mapsToDraw.length);\r\n                // console.log(lastElem);\r\n                var nextElem = (document.getElementById(\"\" + (parseInt(lastElem.id) + 1)));\r\n                variables_js_1.mapsToDraw.push(nextElem);\r\n                // console.log(mapsToDraw);\r\n            }\r\n            else {\r\n                variables_js_1.mapsToDraw.splice(0, variables_js_1.mapsToDraw.length);\r\n            }\r\n            (0, borderChange_js_1.borderChange)();\r\n        });\r\n        // console.log(this.x, this.y);\r\n        variables_js_1.img.addEventListener(\"load\", function () {\r\n            var w = variables_js_1.img.naturalWidth / 32;\r\n            var h = variables_js_1.img.naturalHeight / 20;\r\n            canvas.width = variables_js_1.s;\r\n            canvas.height = variables_js_1.s;\r\n            canvas.id = \"sprite\" + _this.id;\r\n            // ctx?.clearRect(w, h, this.x * w, this.y * h);\r\n            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(variables_js_1.img, _this.x * w + 1, _this.y * h + 1, w - 2, h - 2, 0, 0, variables_js_1.s, variables_js_1.s);\r\n            variables_js_1.sprites === null || variables_js_1.sprites === void 0 ? void 0 : variables_js_1.sprites.appendChild(canvas);\r\n        }, false);\r\n        variables_js_1.img.src = \"sprites.png\"; // Set source path\r\n        // console.log(this.x*w, this.y*h,w, h);\r\n    };\r\n    return SpriteElement;\r\n}());\r\nexports[\"default\"] = SpriteElement;\r\n\n\n//# sourceURL=webpack:///./src/SpriteElement.js?");

/***/ }),

/***/ "./src/borderChange.js":
/*!*****************************!*\
  !*** ./src/borderChange.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.borderChange = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\r\nvar borderChange = function () {\r\n    variables_js_1.mapsElems.forEach(function (e) {\r\n        if (e !== null) {\r\n            e.style.borderColor = \"whitesmoke\";\r\n        }\r\n    });\r\n    variables_js_1.mapsToDraw.forEach(function (e) {\r\n        if (e !== null) {\r\n            e.style.borderColor = \"red\";\r\n        }\r\n    });\r\n};\r\nexports.borderChange = borderChange;\r\n\n\n//# sourceURL=webpack:///./src/borderChange.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar MapElement_js_1 = __webpack_require__(/*! ./MapElement.js */ \"./src/MapElement.js\");\r\nvar SpriteElement_js_1 = __webpack_require__(/*! ./SpriteElement.js */ \"./src/SpriteElement.js\");\r\nvar operations_js_1 = __webpack_require__(/*! ./operations.js */ \"./src/operations.js\");\r\nvar variables_js_1 = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\r\nvar select_js_1 = __webpack_require__(/*! ./select.js */ \"./src/select.js\");\r\n(0, operations_js_1.operations)();\r\n(0, select_js_1.select)();\r\nwindow.onload = function () {\r\n    for (var j = 0; j < 20; j++) {\r\n        for (var i = 0; i < 16; i++) {\r\n            var elem = new SpriteElement_js_1.default(i, j, i + 1);\r\n            elem.loadImage();\r\n        }\r\n    }\r\n    for (var j = 0; j < 20; j++) {\r\n        for (var i = 16; i < 32; i++) {\r\n            var spriteElem = new SpriteElement_js_1.default(i, j, i + 1);\r\n            spriteElem.loadImage();\r\n        }\r\n    }\r\n    var num = Math.floor(variables_js_1.m / (variables_js_1.s + 4)) * 40;\r\n    for (var j = 0; j < num; j++) {\r\n        var mapElem = new MapElement_js_1.default(j + 1, \"\");\r\n        mapElem.loadMap();\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.load = void 0;\r\nvar MapElement_1 = __webpack_require__(/*! ./MapElement */ \"./src/MapElement.ts\");\r\nvar variables_1 = __webpack_require__(/*! ./variables */ \"./src/variables.ts\");\r\nvar load = function () {\r\n    var fileInput = document.getElementById(\"fileInput\");\r\n    fileInput.click();\r\n    fileInput.onchange = function (e) {\r\n        if (fileInput.files) {\r\n            var file = fileInput.files[0];\r\n            if (!file) {\r\n                console.error(\"No file selected\");\r\n                return;\r\n            }\r\n            var reader_1 = new FileReader();\r\n            reader_1.readAsText(file);\r\n            reader_1.addEventListener(\"load\", function () {\r\n                var data = reader_1.result;\r\n                var arr = JSON.parse(data);\r\n                variables_1.map.innerHTML = \"\";\r\n                arr.forEach(function (e, i) {\r\n                    var mapElem = new MapElement_1.default(i, e);\r\n                    mapElem.loadMap();\r\n                });\r\n            });\r\n        }\r\n    };\r\n};\r\nexports.load = load;\r\n\n\n//# sourceURL=webpack:///./src/load.js?");

/***/ }),

/***/ "./src/operations.js":
/*!***************************!*\
  !*** ./src/operations.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.operations = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\r\nvar borderChange_js_1 = __webpack_require__(/*! ./borderChange.js */ \"./src/borderChange.js\");\r\nvar save_js_1 = __webpack_require__(/*! ./save.js */ \"./src/save.js\");\r\nvar load_js_1 = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\r\nvar operations = function () {\r\n    document.querySelector(\"body\").addEventListener(\"keydown\", function (e) {\r\n        console.log(e.code);\r\n        e.preventDefault();\r\n        if (e.code === \"Delete\") {\r\n            var currentChange_1 = new Array();\r\n            variables_js_1.mapsToDraw.forEach(function (e) {\r\n                var ctx = e.getContext(\"2d\");\r\n                ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);\r\n                var currentChangeElem = { id: e.id, url: e.toDataURL() };\r\n                currentChange_1.push(currentChangeElem);\r\n            });\r\n            variables_js_1.maps.splice(variables_js_1.maps.length - variables_js_1.undoCount, variables_js_1.undoCount);\r\n            variables_js_1.maps.push(currentChange_1);\r\n            variables_js_1.mapsToDraw.splice(0, variables_js_1.mapsToDraw.length);\r\n            (0, variables_js_1.setUndoCount)(0);\r\n            (0, borderChange_js_1.borderChange)();\r\n        }\r\n        else if (e.code === \"KeyZ\" && e.ctrlKey) {\r\n            (0, variables_js_1.setUndoCount)(variables_js_1.undoCount + 1);\r\n            console.log(variables_js_1.maps[variables_js_1.maps.length - variables_js_1.undoCount]);\r\n            var undoImg_1 = new Image();\r\n            variables_js_1.maps[variables_js_1.maps.length - variables_js_1.undoCount].forEach(function (e) {\r\n                var undoCanvas = document.getElementById(e.id);\r\n                console.log(undoCanvas);\r\n                var ctx = undoCanvas.getContext(\"2d\");\r\n                var clear = true;\r\n                for (var i = 0; i < variables_js_1.maps.length - variables_js_1.undoCount; i++) {\r\n                    variables_js_1.maps[i].forEach(function (j) {\r\n                        if (j.id === e.id) {\r\n                            if (clear) {\r\n                                clear = false;\r\n                                undoImg_1.src = j.url;\r\n                            }\r\n                        }\r\n                    });\r\n                }\r\n                if (clear) {\r\n                    console.log(\"clear \" + e.id);\r\n                    ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);\r\n                }\r\n                else {\r\n                    console.log(\"draw \" + e.id);\r\n                    undoImg_1.addEventListener(\"load\", function () {\r\n                        ctx.drawImage(undoImg_1, 0, 0);\r\n                    });\r\n                }\r\n            });\r\n        }\r\n        else if (e.ctrlKey && e.code === \"KeyY\") {\r\n            if (variables_js_1.undoCount > 0) {\r\n                (0, variables_js_1.setUndoCount)(variables_js_1.undoCount - 1);\r\n                // console.log(undoCount);\r\n                var redoImg_1 = new Image();\r\n                //   console.log(maps[maps.length - undoCount - 1]);\r\n                variables_js_1.maps[variables_js_1.maps.length - variables_js_1.undoCount - 1].forEach(function (e) {\r\n                    var redoCanvas = document.getElementById(e.id);\r\n                    var ctx = redoCanvas.getContext(\"2d\");\r\n                    redoImg_1.src = e.url;\r\n                    redoImg_1.addEventListener(\"load\", function () {\r\n                        console.log(redoImg_1.src);\r\n                        ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, variables_js_1.s, variables_js_1.s);\r\n                        ctx.drawImage(redoImg_1, 0, 0);\r\n                    });\r\n                    // }\r\n                });\r\n            }\r\n        }\r\n        else if (e.ctrlKey && e.code === \"KeyS\") {\r\n            (0, save_js_1.save)();\r\n        }\r\n        else if (e.ctrlKey && e.code === \"KeyL\") {\r\n            (0, load_js_1.load)();\r\n        }\r\n    });\r\n};\r\nexports.operations = operations;\r\n\n\n//# sourceURL=webpack:///./src/operations.js?");

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.save = void 0;\r\nvar save = function () {\r\n    var elems = Array.from(document.getElementsByClassName(\"mapElem\"));\r\n    var urls = new Array();\r\n    elems.forEach(function (e) {\r\n        urls.push(e.toDataURL());\r\n    });\r\n    var data = JSON.stringify(urls);\r\n    var type = \"application/json\";\r\n    var name = window.prompt(\"Filename\", \"\");\r\n    if (name) {\r\n        var filename = name + \".json\";\r\n        var blob = new Blob([data], { type: type });\r\n        console.log(blob);\r\n        var url_1 = URL.createObjectURL(blob);\r\n        console.log(url_1);\r\n        var link = document.createElement(\"a\");\r\n        link.innerText = \"save\";\r\n        link.href = url_1;\r\n        link.download = filename;\r\n        document.body.appendChild(link);\r\n        link.click();\r\n        setTimeout(function () {\r\n            URL.revokeObjectURL(url_1);\r\n        }, 0);\r\n        document.body.removeChild(link);\r\n    }\r\n};\r\nexports.save = save;\r\n\n\n//# sourceURL=webpack:///./src/save.js?");

/***/ }),

/***/ "./src/select.js":
/*!***********************!*\
  !*** ./src/select.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.select = void 0;\r\nvar variables_js_1 = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\r\nvar borderChange_js_1 = __webpack_require__(/*! ./borderChange.js */ \"./src/borderChange.js\");\r\nvar startX = 0;\r\nvar startY = 0;\r\nvar draw = false;\r\nvar div = document.createElement(\"div\");\r\ndocument.querySelector(\"#right\").appendChild(div);\r\nvar select = function () {\r\n    variables_js_1.map.addEventListener(\"mousedown\", function (e) {\r\n        e.preventDefault();\r\n        if (!e.ctrlKey) {\r\n            variables_js_1.mapsToDraw.splice(0, variables_js_1.mapsToDraw.length);\r\n            (0, borderChange_js_1.borderChange)();\r\n        }\r\n        div.style.display = \"block\";\r\n        div.style.position = \"absolute\";\r\n        div.style.left = e.pageX + \"px\";\r\n        div.style.top = e.pageY + \"px\";\r\n        startX = e.pageX;\r\n        startY = e.pageY;\r\n        div.style.zIndex = \"1000\";\r\n        div.style.background = \"rgba(93, 185, 227,0.7)\";\r\n        div.style.border = \"1px dashed blue\";\r\n        div.style.width = \"0px\";\r\n        div.style.height = \"0px\";\r\n        draw = true;\r\n    });\r\n    variables_js_1.map.addEventListener(\"mousemove\", function (e) {\r\n        if (draw) {\r\n            if (startX > e.pageX) {\r\n                div.style.left = e.pageX + \"px\";\r\n            }\r\n            else {\r\n                div.style.left = startX + \"px\";\r\n            }\r\n            if (startY > e.pageY) {\r\n                div.style.top = e.pageY + \"px\";\r\n            }\r\n            else {\r\n                div.style.top = startY + \"px\";\r\n            }\r\n            div.style.width = Math.abs(startX - e.pageX) + \"px\";\r\n            div.style.height = Math.abs(startY - e.pageY) + \"px\";\r\n        }\r\n    });\r\n    div.addEventListener(\"mousemove\", function (e) {\r\n        if (draw) {\r\n            if (startX > e.pageX) {\r\n                div.style.left = e.pageX + \"px\";\r\n            }\r\n            else {\r\n                div.style.left = startX + \"px\";\r\n            }\r\n            if (startY > e.pageY) {\r\n                div.style.top = e.pageY + \"px\";\r\n            }\r\n            else {\r\n                div.style.top = startY + \"px\";\r\n            }\r\n            div.style.width = Math.abs(startX - e.pageX) + \"px\";\r\n            div.style.height = Math.abs(startY - e.pageY) + \"px\";\r\n        }\r\n    });\r\n    window.addEventListener(\"mouseup\", function () {\r\n        draw = false;\r\n        var divRect = div.getBoundingClientRect();\r\n        variables_js_1.mapsElems.forEach(function (e) {\r\n            var elemRect = e.getBoundingClientRect();\r\n            var l = divRect.left;\r\n            var r = divRect.right;\r\n            var t = divRect.top;\r\n            var b = divRect.bottom;\r\n            var xOverlap = elemRect.left < r && elemRect.right > l;\r\n            var yOverlap = elemRect.top < b && elemRect.bottom > t;\r\n            var xInside = elemRect.left >= l && elemRect.right <= r;\r\n            var yInside = elemRect.top >= t && elemRect.bottom <= b;\r\n            if (xOverlap &&\r\n                yOverlap &&\r\n                (xInside ||\r\n                    yInside ||\r\n                    (elemRect.bottom > t &&\r\n                        elemRect.top < t &&\r\n                        (elemRect.right > l || elemRect.left < r)) ||\r\n                    (elemRect.top < b &&\r\n                        elemRect.bottom > b &&\r\n                        (elemRect.right > l || elemRect.left < r)))) {\r\n                variables_js_1.mapsToDraw.push(e);\r\n            }\r\n        });\r\n        (0, borderChange_js_1.borderChange)();\r\n        div.style.display = \"none\";\r\n    });\r\n};\r\nexports.select = select;\r\n\n\n//# sourceURL=webpack:///./src/select.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.setUndoCount = exports.undoCount = exports.div = exports.maps = exports.mapsElems = exports.mapsToDraw = exports.clickedSprite = exports.m = exports.s = exports.automatic = exports.img = exports.map = exports.sprites = void 0;\r\nexports.sprites = document.getElementById(\"sprites\");\r\nexports.map = document.getElementById(\"map\");\r\nexports.img = new Image();\r\nexports.automatic = (document.getElementById(\"automatic\"));\r\nexports.s = ((exports.sprites === null || exports.sprites === void 0 ? void 0 : exports.sprites.offsetWidth) !== undefined ? (exports.sprites === null || exports.sprites === void 0 ? void 0 : exports.sprites.offsetWidth) - 64 : 0) / 16;\r\nexports.m = (exports.map === null || exports.map === void 0 ? void 0 : exports.map.offsetWidth) !== undefined ? exports.map === null || exports.map === void 0 ? void 0 : exports.map.offsetWidth : 0;\r\nexports.mapsToDraw = new Array();\r\nexports.mapsElems = new Array();\r\nexports.maps = new Array();\r\nexports.div = document.createElement(\"div\");\r\nexports.undoCount = 0;\r\nvar setUndoCount = function (x) {\r\n    exports.undoCount = x;\r\n};\r\nexports.setUndoCount = setUndoCount;\r\n\n\n//# sourceURL=webpack:///./src/variables.js?");

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