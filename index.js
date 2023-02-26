var sprites = document.getElementById("sprites");
var map = document.getElementById("map");
var img = new Image();
var s = ((sprites === null || sprites === void 0 ? void 0 : sprites.offsetWidth) !== undefined ? (sprites === null || sprites === void 0 ? void 0 : sprites.offsetWidth) - 64 : 0) / 16;
var m = (map === null || map === void 0 ? void 0 : map.offsetWidth) !== undefined ? map === null || map === void 0 ? void 0 : map.offsetWidth : 0;
var clickedSprite;
var mapsToDraw = new Array();
var mapsElems = new Array();
var mapElement = /** @class */ (function () {
    function mapElement(id) {
        this.id = id;
    }
    mapElement.prototype.loadMap = function () {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.classList.add("mapElem");
        canvas.width = s;
        canvas.height = s;
        canvas.id = "map" + this.id;
        mapsElems.push(canvas);
        canvas.addEventListener("click", function () {
            mapsElems.forEach(function (e) {
                if (e !== null) {
                    e.style.borderColor = "whitesmoke";
                }
            });
            mapsToDraw.splice(0, mapsToDraw.length);
            mapsToDraw.push(canvas);
            mapsToDraw.forEach(function (e) {
                if (e !== null) {
                    e.style.borderColor = "red";
                }
            });
            //   ctx.drawImage(clickedSprite, 0, 0);
        });
        map === null || map === void 0 ? void 0 : map.appendChild(canvas);
    };
    return mapElement;
}());
var spriteElement = /** @class */ (function () {
    function spriteElement(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
    }
    spriteElement.prototype.loadImage = function () {
        var _this = this;
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.addEventListener("click", function () {
            var clickedImg = new Image();
            mapsToDraw.forEach(function (e) {
                var mapCtx = e.getContext("2d");
                clickedImg.addEventListener("load", function () {
                    mapCtx.drawImage(clickedImg, 0, 0);
                }, false);
                clickedImg.src = canvas.toDataURL();
            });
        });
        // console.log(this.x, this.y);
        img.addEventListener("load", function () {
            var w = img.naturalWidth / 32;
            var h = img.naturalHeight / 20;
            canvas.width = s;
            canvas.height = s;
            canvas.id = "" + _this.id;
            // ctx?.clearRect(w, h, this.x * w, this.y * h);
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, _this.x * w + 1, _this.y * h + 1, w - 2, h - 2, 0, 0, s, s);
            sprites === null || sprites === void 0 ? void 0 : sprites.appendChild(canvas);
        }, false);
        img.src = "sprites.png"; // Set source path
        // console.log(this.x*w, this.y*h,w, h);
    };
    return spriteElement;
}());
var spriteId = 0;
var mapId = 0;
window.onload = function () {
    for (var j = 0; j < 20; j++) {
        for (var i = 0; i < 16; i++) {
            spriteId++;
            var elem = new spriteElement(i, j, spriteId);
            elem.loadImage();
        }
    }
    for (var j = 0; j < 20; j++) {
        for (var i = 16; i < 32; i++) {
            spriteId++;
            var spriteElem = new spriteElement(i, j, spriteId);
            spriteElem.loadImage();
        }
    }
    var num = Math.floor(m / (s + 4)) * 40;
    for (var j = 0; j < num; j++) {
        mapId++;
        var mapElem = new mapElement(mapId);
        mapElem.loadMap();
    }
};
