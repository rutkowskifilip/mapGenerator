import { setUndoCount, undoCount } from "./index.js";
import { mapsToDraw, mapsElems, maps, s, map } from "./variables.js";
import { borderChange } from "./borderChange.js";

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
};
