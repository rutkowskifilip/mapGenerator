import { setUndoCount, undoCount } from "./index.js";
import { mapsToDraw, mapsElems, maps, s, map } from "./variables.js";
import { borderChange } from "./borderChange.js";
let startX = 0;
let startY = 0;
let draw = false;
const div = document.createElement("div");

document.querySelector("#right")!.appendChild(div);
export const operations = () => {
  document.querySelector("body")!.addEventListener("keydown", function (e) {
    console.log(e.code);

    if (e.code === "Delete") {
      e.preventDefault();
      const currentChange = new Array();

      mapsToDraw.forEach((e) => {
        const ctx = e.getContext("2d") as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, s, s);
        currentChange.push({ id: e.id, url: e.toDataURL() });
      });
      maps.splice(maps.length - undoCount, undoCount);
      maps.push(currentChange);
      mapsToDraw.splice(0, mapsToDraw.length);
      setUndoCount(0);
      borderChange();
    } else if (e.code === "KeyZ" && e.ctrlKey) {
      setUndoCount(undoCount + 1);
      console.log(maps[maps.length - undoCount]);
      const undoImg = new Image();
      maps[maps.length - undoCount].forEach((e) => {
        const undoCanvas: HTMLCanvasElement = document.getElementById(
          e.id
        ) as HTMLCanvasElement;
        console.log(undoCanvas);

        const ctx = undoCanvas.getContext("2d");
        let clear = true;
        for (let i = 0; i < maps.length - undoCount; i++) {
          maps[i].forEach((j) => {
            if (j.id === e.id) {
              if (clear) {
                clear = false;
                undoImg.src = j.url;
              }
            }
          });
        }
        if (clear) {
          console.log("clear " + e.id);

          ctx!.clearRect(0, 0, s, s);
        } else {
          console.log("draw " + e.id);

          undoImg.addEventListener("load", () => {
            ctx!.drawImage(undoImg, 0, 0);
          });
        }
      });
    } else if (e.ctrlKey && e.code === "KeyY") {
      if (undoCount > 0) {
        setUndoCount(undoCount - 1);
        // console.log(undoCount);
        const redoImg = new Image();
        //   console.log(maps[maps.length - undoCount - 1]);

        maps[maps.length - undoCount - 1].forEach((e) => {
          const redoCanvas: HTMLCanvasElement = document.getElementById(
            e.id
          ) as HTMLCanvasElement;

          const ctx = redoCanvas.getContext("2d");
          redoImg.src = e.url;
          redoImg.addEventListener("load", () => {
            console.log(redoImg.src);
            ctx?.clearRect(0, 0, s, s);
            ctx!.drawImage(redoImg, 0, 0);
          });
          // }
        });
      }
    }
  });
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
};
