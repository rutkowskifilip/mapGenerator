import { mapsElems, s, mapsToDraw, map } from "./variables.js";
import { borderChange } from "./borderChange.js";
export default class MapElement {
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
