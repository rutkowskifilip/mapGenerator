import { undoCount, setUndoCount, maps, s } from "../variables";

export const redo = () => {
  if (undoCount > 0) {
    setUndoCount(undoCount - 1);
    const redoImg = new Image();

    maps[maps.length - undoCount - 1].forEach((e) => {
      const redoCanvas: HTMLCanvasElement = document.getElementById(
        e.id
      ) as HTMLCanvasElement;

      const ctx = redoCanvas.getContext("2d");
      redoImg.src = e.url;
      redoImg.addEventListener("load", () => {
        ctx?.clearRect(0, 0, s, s);
        ctx!.drawImage(redoImg, 0, 0);
      });
      // }
    });
  }
};
