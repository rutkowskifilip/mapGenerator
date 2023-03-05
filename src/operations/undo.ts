import { setUndoCount, undoCount, maps, s } from "../variables.js";

export const undo = () => {
  setUndoCount(undoCount + 1);
  const undoImg = new Image();
  maps[maps.length - undoCount].forEach((e) => {
    const undoCanvas: HTMLCanvasElement = document.getElementById(
      e.id
    ) as HTMLCanvasElement;

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
      ctx!.clearRect(0, 0, s, s);
    } else {
      undoImg.addEventListener("load", () => {
        ctx!.drawImage(undoImg, 0, 0);
      });
    }
  });
};
