import { borderChange } from "../actions/borderChange";
import { BoundsI, PasteI } from "../types";
import { copiedMaps, map, mapsElems, s, selectedMaps } from "../variables";

export const paste = () => {
  const selectedBounds: BoundsI[] = new Array();
  const canvases: PasteI[] = new Array();
  let pasted = false;
  if (copiedMaps.length > 0) {
    copiedMaps.forEach((e) => {
      const eRect = e.getBoundingClientRect();
      const bounds: BoundsI = {
        left: eRect.left,
        top: eRect.top,
      };

      selectedBounds.push(bounds);

      const elemBound: BoundsI = {
        left: eRect.left,
        top: eRect.top,
      };
      const canvas = document.createElement("canvas");
      canvas.width = s;
      canvas.height = s;
      canvas.style.display = "none";
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.addEventListener("load", () => {
        ctx.drawImage(img, 0, 0);
      });
      img.src = e.toDataURL();
      canvas.style.position = "absolute";
      canvas.classList.add("paste");
      document.querySelector("body").appendChild(canvas);
      canvases.push({ canvas: canvas, bounds: elemBound });
    });
  }

  const top = Math.min(...selectedBounds.map((o) => o.top));
  const left = Math.min(...selectedBounds.map((o) => o.left));
  let selectedCanvases: HTMLCanvasElement[] = new Array();
  const mapElemsBounds: PasteI[] = new Array();
  mapsElems.forEach((e) => {
    const eRect = e.getBoundingClientRect();
    const bounds: BoundsI = {
      top: eRect.top,
      left: eRect.left,
    };
    mapElemsBounds.push({ canvas: e, bounds: bounds });
  });
  let previousX = 0;
  let previousY = 0;

  map.addEventListener("mousemove", (e) => {
    if (!pasted) {
      selectedMaps.splice(0, selectedMaps.length);
    }
    canvases.forEach((elem) => {
      const canvas = elem.canvas;
      const bounds = elem.bounds;
      const canvasLeft = e.pageX + (bounds.left - left);
      const canvasTop = e.pageY + (bounds.top - top);
      canvas.style.display = "block";
      canvas.style.position = "absolute";
      canvas.style.left = canvasLeft + "px";
      canvas.style.top = canvasTop + "px";
      mapElemsBounds.forEach((i) => {
        if (
          Math.abs(i.bounds.left - canvasLeft) < 5 &&
          Math.abs(i.bounds.top - canvasTop) < 5
        ) {
          previousX = e.pageX;
          previousY = e.pageY;
          selectedMaps.push(i.canvas);
          selectedCanvases.push(i.canvas);
        }
      });
      borderChange();
    });
  });

  map.addEventListener(
    "click",
    () => {
      selectedCanvases = selectedCanvases.slice(-copiedMaps.length);
      console.log("klik");

      if (copiedMaps.length > 0) {
        selectedCanvases.forEach((e, i) => {
          const ctx = e.getContext("2d");
          const img = new Image();
          img.addEventListener("load", () => {
            ctx.clearRect(0, 0, s, s);
            ctx.drawImage(img, 0, 0);

            canvases.splice(0, canvases.length);
            selectedMaps.splice(0, selectedMaps.length);
            borderChange();
            pasted = true;
            Array.from(document.getElementsByClassName("paste")).forEach(
              (elem) => {
                document.querySelector("body").removeChild(elem);
              }
            );
          });
          img.src = copiedMaps[i].toDataURL();
        });
      }
    },
    { once: true }
  );
  map.addEventListener(
    "mousedown",
    () => {
      selectedCanvases = selectedCanvases.slice(-copiedMaps.length);
      console.log("klik");

      if (copiedMaps.length > 0) {
        selectedCanvases.forEach((e, i) => {
          const ctx = e.getContext("2d");
          const img = new Image();
          img.addEventListener("load", () => {
            ctx.clearRect(0, 0, s, s);
            ctx.drawImage(img, 0, 0);

            canvases.splice(0, canvases.length);
            selectedMaps.splice(0, selectedMaps.length);
            borderChange();
            pasted = true;
            Array.from(document.getElementsByClassName("paste")).forEach(
              (elem) => {
                document.querySelector("body").removeChild(elem);
              }
            );
          });
          img.src = copiedMaps[i].toDataURL();
        });
      }
    },
    { once: true }
  );
};
