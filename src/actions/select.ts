import { map, selectedMaps, mapsElems } from "../variables.js";
import { borderChange } from "./borderChange.js";
let startX = 0;
let startY = 0;
let draw = false;
const div = document.createElement("div");

document.querySelector("#right")!.appendChild(div);
export const select = () => {
  map!.addEventListener("mousedown", (e) => {
    e.preventDefault();
    if (!e.ctrlKey) {
      selectedMaps.splice(0, selectedMaps.length);
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
        selectedMaps.push(e);
      }
    });

    borderChange();
    div.style.display = "none";
  });
};
