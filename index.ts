const sprites = document.getElementById("sprites");
const map = document.getElementById("map");

const img = new Image();
const automatic: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("automatic")
);

const s: number =
  (sprites?.offsetWidth !== undefined ? sprites?.offsetWidth - 64 : 0) / 16;
const m: number = map?.offsetWidth !== undefined ? map?.offsetWidth : 0;

let clickedSprite: string;
const mapsToDraw: HTMLCanvasElement[] = new Array();
const mapsElems: HTMLCanvasElement[] = new Array();

const div = document.createElement("div");
let draw = false;
let startX = 0;
let startY = 0;
document.querySelector("#right")!.appendChild(div);

class mapElement {
  private id: number;

  constructor(id: number) {
    this.id = id;
  }
  loadMap(): void {
    const canvas: HTMLCanvasElement = document.createElement(
      "canvas"
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.classList.add("mapElem");
    canvas.width = s;
    canvas.height = s;
    canvas.id = "" + this.id;
    mapsElems.push(canvas);

    canvas.addEventListener("click", (e) => {
      if (!e.ctrlKey) {
        mapsToDraw.splice(0, mapsToDraw.length);
      }
      mapsToDraw.push(canvas);

      borderChange();

      //   ctx.drawImage(clickedSprite, 0, 0);
    });
    map?.appendChild(canvas);
  }
}
class spriteElement {
  private x: number;
  private y: number;
  private id: number;
  constructor(x: number, y: number, id: number) {
    this.x = x;
    this.y = y;
    this.id = id;
  }

  loadImage(): void {
    let canvas: HTMLCanvasElement = document.createElement(
      "canvas"
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.addEventListener("click", () => {
      const clickedImg = new Image();

      mapsToDraw.forEach((e) => {
        const mapCtx = e.getContext("2d") as CanvasRenderingContext2D;
        clickedImg.addEventListener(
          "load",
          () => {
            mapCtx.drawImage(clickedImg, 0, 0);
          },
          false
        );

        clickedImg.src = canvas.toDataURL();
      });
      if (automatic!.checked === true) {
        const lastElem = mapsToDraw.pop();
        mapsToDraw.splice(0, mapsToDraw.length);
        console.log(lastElem);

        const nextElem: HTMLCanvasElement = <HTMLCanvasElement>(
          document.getElementById("" + (parseInt(lastElem!.id) + 1))
        );
        mapsToDraw.push(nextElem);
        console.log(mapsToDraw);
      } else {
        mapsToDraw.splice(0, mapsToDraw.length);
      }
      borderChange();
    });
    // console.log(this.x, this.y);
    img.addEventListener(
      "load",
      () => {
        let w: number = img.naturalWidth / 32;
        let h: number = img.naturalHeight / 20;
        canvas.width = s;
        canvas.height = s;
        canvas.id = "sprite" + this.id;

        // ctx?.clearRect(w, h, this.x * w, this.y * h);
        ctx?.drawImage(
          img,
          this.x * w + 1,
          this.y * h + 1,
          w - 2,
          h - 2,
          0,
          0,
          s,
          s
        );
        sprites?.appendChild(canvas);
      },
      false
    );
    img.src = "sprites.png"; // Set source path

    // console.log(this.x*w, this.y*h,w, h);
  }
}
let spriteId: number = 0;
let mapId: number = 0;
window.onload = (): void => {
  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 16; i++) {
      spriteId++;
      var elem = new spriteElement(i, j, spriteId);
      elem.loadImage();
    }
  }
  for (let j = 0; j < 20; j++) {
    for (let i = 16; i < 32; i++) {
      spriteId++;
      const spriteElem = new spriteElement(i, j, spriteId);
      spriteElem.loadImage();
    }
  }

  const num: number = Math.floor(m / (s + 4)) * 40;

  for (let j = 0; j < num; j++) {
    mapId++;
    const mapElem = new mapElement(mapId);
    mapElem.loadMap();
  }
};

map!.addEventListener("mousedown", (e) => {
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
map!.addEventListener("mousemove", (e) => {
  if (draw) {
    if (startX > e.pageX) {
      div.style.left = e.pageX + "px";
    } else {
      div.style.left = startX + "px";
    }
    if (startY > e.pageY) {
      div.style.top = e.pageY + "px";
    } else {
      div.style.top = startY + "px";
    }
    div.style.width = Math.abs(startX - e.pageX) + "px";
    div.style.height = Math.abs(startY - e.pageY) + "px";
  }
});
div.addEventListener("mousemove", (e) => {
  if (draw) {
    if (startX > e.pageX) {
      div.style.left = e.pageX + "px";
    } else {
      div.style.left = startX + "px";
    }
    if (startY > e.pageY) {
      div.style.top = e.pageY + "px";
    } else {
      div.style.top = startY + "px";
    }
    div.style.width = Math.abs(startX - e.pageX) + "px";
    div.style.height = Math.abs(startY - e.pageY) + "px";
  }
});
window.addEventListener("mouseup", () => {
  draw = false;

  const divRect = div.getBoundingClientRect();
  mapsElems.forEach((e) => {
    const elemRect = e.getBoundingClientRect();
    const l = divRect.left;
    const r = divRect.right;
    const t = divRect.top;
    const b = divRect.bottom;

    const xOverlap = elemRect.left < r && elemRect.right > l;
    const yOverlap = elemRect.top < b && elemRect.bottom > t;
    const xInside = elemRect.left >= l && elemRect.right <= r;
    const yInside = elemRect.top >= t && elemRect.bottom <= b;

    if (
      xOverlap &&
      yOverlap &&
      (xInside ||
        yInside ||
        (elemRect.bottom > t &&
          elemRect.top < t &&
          (elemRect.right > l || elemRect.left < r)) ||
        (elemRect.top < b &&
          elemRect.bottom > b &&
          (elemRect.right > l || elemRect.left < r)))
    ) {
      mapsToDraw.push(e);
    }
  });
  borderChange();
  div.style.display = "none";
});
document.querySelector("body")!.addEventListener("keydown", function (e) {
  if (e.code === "Delete") {
    e.preventDefault();
    mapsToDraw.forEach((e) => {
      const ctx = e.getContext("2d") as CanvasRenderingContext2D;
      ctx.clearRect(0, 0, s, s);
    });
    mapsToDraw.splice(0, mapsToDraw.length);
    borderChange();
  }
});

const borderChange = (): void => {
  mapsElems.forEach((e) => {
    if (e !== null) {
      e!.style.borderColor = "whitesmoke";
    }
  });

  mapsToDraw.forEach((e) => {
    if (e !== null) {
      e!.style.borderColor = "red";
    }
  });
};
