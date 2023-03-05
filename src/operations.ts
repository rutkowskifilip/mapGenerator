import { save } from "./operations/save.js";
import { load } from "./operations/load.js";
import { clear } from "./operations/clear.js";
import { undo } from "./operations/undo.js";
import { redo } from "./operations/redo.js";
import { copy } from "./operations/copy.js";
import { selectedMaps } from "./variables.js";
import { paste } from "./operations/paste.js";

export const operations = () => {
  document.querySelector("body")!.addEventListener("keydown", function (e) {
    e.preventDefault();
    if (e.code === "Delete") {
      clear();
    } else if (e.code === "KeyZ" && e.ctrlKey) {
      undo();
    } else if (e.ctrlKey && e.code === "KeyY") {
      redo();
    } else if (e.ctrlKey && e.code === "KeyS") {
      save();
    } else if (e.ctrlKey && e.code === "KeyL") {
      load();
    } else if (e.ctrlKey && e.code === "KeyC") {
      copy(selectedMaps);
    } else if (e.ctrlKey && e.code === "KeyV") {
      paste();
    }
  });
};
