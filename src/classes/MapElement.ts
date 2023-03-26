import { mapsElems, s, selectedMaps, map } from "../variables";
import { borderChange } from "../actions/borderChange";
export default class MapElement {
  private id: number;
  private url: string;
  constructor(id: number, url: string) {
    this.id = id;
    this.url = url;
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
    if (this.url !== "") {
      const img = new Image();
      img.addEventListener("load", () => {
        ctx.drawImage(img, 0, 0);
      });
      img.src = this.url;
    }
    canvas.addEventListener("click", (e) => {
      if (!e.ctrlKey) {
        selectedMaps.splice(0, selectedMaps.length);
      }
      selectedMaps.push(canvas);

      borderChange();

      //   ctx.drawImage(clickedSprite, 0, 0);
    });
    map?.appendChild(canvas);
  }
}
