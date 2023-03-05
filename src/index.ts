import MapElement from "./MapElement.js";
import SpriteElement from "./SpriteElement.js";
import { operations } from "./operations.js";
import { m, s } from "./variables.js";
import { select } from "./select.js";
operations();
select();

window.onload = (): void => {
  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 16; i++) {
      var elem = new SpriteElement(i, j, i + 1);
      elem.loadImage();
    }
  }
  for (let j = 0; j < 20; j++) {
    for (let i = 16; i < 32; i++) {
      const spriteElem = new SpriteElement(i, j, i + 1);
      spriteElem.loadImage();
    }
  }

  const num: number = Math.floor(m / (s + 4)) * 40;

  for (let j = 0; j < num; j++) {
    const mapElem = new MapElement(j + 1, "");
    mapElem.loadMap();
  }
};
