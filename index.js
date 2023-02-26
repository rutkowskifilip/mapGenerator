var sprites = document.getElementById("sprites");
var map = document.getElementById("map");
var img = new Image();
var s = ((sprites === null || sprites === void 0 ? void 0 : sprites.offsetWidth) !== undefined ? (sprites === null || sprites === void 0 ? void 0 : sprites.offsetWidth) - 64 : 0) / 16;
var m = (map === null || map === void 0 ? void 0 : map.offsetWidth) !== undefined ? map === null || map === void 0 ? void 0 : map.offsetWidth : 0;
var clickedSprite;
var mapsToDraw = new Array();
var mapsElems = new Array();
var div = document.createElement("div");
var draw = false;
var startX = 0;
var startY = 0;
document.querySelector("#right").appendChild(div);
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
        canvas.addEventListener("click", function (e) {
            if (!e.ctrlKey) {
                mapsToDraw.splice(0, mapsToDraw.length);
            }
            mapsToDraw.push(canvas);
            borderChange();
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
map.addEventListener("mousedown", function (e) {
    e.preventDefault();
    if (!e.ctrlKey) {
        mapsToDraw.splice(0, mapsToDraw.length);
        borderChange();
    }
    div.style.display = "block";
    div.style.position = "absolute";
    div.style.left = e.pageX + "px";
    div.style.top = e.pageY + "px";
    startX = e.pageX;
    startY = e.pageY;
    div.style.zIndex = "1000";
    div.style.background = "rgba(93, 185, 227,0.7)";
    div.style.border = "1px dashed blue";
    div.style.width = "0px";
    div.style.height = "0px";
    draw = true;
});
map.addEventListener("mousemove", function (e) {
    if (draw) {
        if (startX > e.pageX) {
            div.style.left = e.pageX + "px";
        }
        else {
            div.style.left = startX + "px";
        }
        if (startY > e.pageY) {
            div.style.top = e.pageY + "px";
        }
        else {
            div.style.top = startY + "px";
        }
        div.style.width = Math.abs(startX - e.pageX) + "px";
        div.style.height = Math.abs(startY - e.pageY) + "px";
    }
});
window.addEventListener("mouseup", function () {
    draw = false;
    var divRect = div.getBoundingClientRect();
    mapsElems.forEach(function (e) {
        var elemRect = e.getBoundingClientRect();
        var l = divRect.left;
        var r = divRect.right;
        var t = divRect.top;
        var b = divRect.bottom;
        var xOverlap = elemRect.left < r && elemRect.right > l;
        var yOverlap = elemRect.top < b && elemRect.bottom > t;
        var xInside = elemRect.left >= l && elemRect.right <= r;
        var yInside = elemRect.top >= t && elemRect.bottom <= b;
        if (xOverlap &&
            yOverlap &&
            (xInside ||
                yInside ||
                (elemRect.bottom > t &&
                    elemRect.top < t &&
                    (elemRect.right > l || elemRect.left < r)) ||
                (elemRect.top < b &&
                    elemRect.bottom > b &&
                    (elemRect.right > l || elemRect.left < r)))) {
            mapsToDraw.push(e);
        }
    });
    borderChange();
    div.style.display = "none";
});
var borderChange = function () {
    mapsElems.forEach(function (e) {
        if (e !== null) {
            e.style.borderColor = "whitesmoke";
        }
    });
    mapsToDraw.forEach(function (e) {
        if (e !== null) {
            e.style.borderColor = "red";
        }
    });
};
