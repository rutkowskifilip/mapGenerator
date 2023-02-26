const sprites = document.getElementById("sprites");
const map = document.getElementById("map");

const img = new Image();

const s: number =
  (sprites?.offsetWidth !== undefined ? sprites?.offsetWidth - 64 : 0) / 16;
const m: number = map?.offsetWidth !== undefined ? map?.offsetWidth : 0;

let clickedSprite: string;
const mapsToDraw: HTMLCanvasElement[] = new Array();
const mapsElems: HTMLCanvasElement[] = new Array();
class mapElement {
  id: number;
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
    canvas.id = "map" + this.id;
    mapsElems.push(canvas);
    canvas.addEventListener("click", () => {
      mapsElems.forEach((e) => {
        if (e !== null) {
          e!.style.borderColor = "whitesmoke";
        }
      });
      mapsToDraw.splice(0, mapsToDraw.length);
      mapsToDraw.push(canvas);
      mapsToDraw.forEach((e) => {
        if (e !== null) {
          e!.style.borderColor = "red";
        }
      });

      //   ctx.drawImage(clickedSprite, 0, 0);
    });
    map?.appendChild(canvas);
  }
}
class spriteElement {
  x: number;
  y: number;
  id: number;
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
    });
    // console.log(this.x, this.y);
    img.addEventListener(
      "load",
      () => {
        let w: number = img.naturalWidth / 32;
        let h: number = img.naturalHeight / 20;
        canvas.width = s;
        canvas.height = s;
        canvas.id = "" + this.id;

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
