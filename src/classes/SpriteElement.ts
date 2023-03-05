import {
  selectedMaps,
  maps,
  s,
  m,
  automatic,
  img,
  sprites,
  undoCount,
  setUndoCount,
} from "../variables.js";

import { borderChange } from "../actions/borderChange.js";

export default class SpriteElement {
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
      const currentChange = new Array();
      selectedMaps.forEach((e) => {
        const mapCtx = e.getContext("2d") as CanvasRenderingContext2D;
        clickedImg.addEventListener(
          "load",
          () => {
            mapCtx.drawImage(clickedImg, 0, 0);
            currentChange.push({ id: e.id, url: clickedImg.src });
          },
          false
        );

        clickedImg.src = canvas.toDataURL();
      });
      maps.splice(maps.length - undoCount, undoCount);
      maps.push(currentChange);
      // maps.push(currentMap);
      setUndoCount(0);

      if (automatic!.checked === true) {
        const lastElem = selectedMaps.pop();
        selectedMaps.splice(0, selectedMaps.length);
        // console.log(lastElem);

        const nextElem: HTMLCanvasElement = <HTMLCanvasElement>(
          document.getElementById("" + (parseInt(lastElem!.id) + 1))
        );
        selectedMaps.push(nextElem);
        // console.log(selectedMaps);
      } else {
        selectedMaps.splice(0, selectedMaps.length);
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
