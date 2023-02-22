"use strict";
var sprites = document.getElementById("sprites");
var img = new Image();
img.src = "sprites.png";
var spriteElement = /** @class */ (function () {
    function spriteElement(x, y) {
        this.x = x;
        this.y = y;
    }
    spriteElement.prototype.loadImage = function () {
        var div = document.createElement("div");
        sprites === null || sprites === void 0 ? void 0 : sprites.appendChild(div);
        var w = img.naturalWidth / 32;
        var h = img.naturalHeight / 16;
        div.style.width = w + 'px';
        div.style.height = h + 'px';
        div.style.background = "url('sprites.png') -".concat(this.x * w, "px -").concat(this.y * h, "px");
        // console.log(this.x*w, this.y*h,w, h);
    };
    return spriteElement;
}());
for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 30; j++) {
        var elem = new spriteElement(i, j);
        elem.loadImage();
    }
}
