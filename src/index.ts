import MapElement from "./MapElement.js";
import SpriteElement from "./SpriteElement.js";
import { operations } from "./operations.js";
import { m, s } from "./variables.js";
import { select } from "./select.js";

let spriteId: number = 0;
let mapId: number = 0;
operations();
select();
export let undoCount = 0;
export const setUndoCount = (x: number) => {
  undoCount = x;
};
window.onload = (): void => {
  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 16; i++) {
      spriteId++;
      var elem = new SpriteElement(i, j, spriteId);
      elem.loadImage();
    }
  }
  for (let j = 0; j < 20; j++) {
    for (let i = 16; i < 32; i++) {
      spriteId++;
      const spriteElem = new SpriteElement(i, j, spriteId);
      spriteElem.loadImage();
    }
  }

  const num: number = Math.floor(m / (s + 4)) * 40;

  for (let j = 0; j < num; j++) {
    mapId++;
    const mapElem = new MapElement(mapId);
    mapElem.loadMap();
  }
};
