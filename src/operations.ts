import { save } from "./operations/save";
import { load } from "./operations/load";
import { clear } from "./operations/clear";
import { undo } from "./operations/undo";
import { redo } from "./operations/redo";
import { copy } from "./operations/copy";
import { map, selectedMaps } from "./variables";
import { paste } from "./operations/paste";
import { cut } from "./operations/cut";
import { ContextMenu } from "./classes/ContextMenu";

export const operations = () => {
  const menu = new ContextMenu(undo, redo, copy, cut, paste, save, load);
  map.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    menu.show(e.pageX, e.pageY);
    window.addEventListener("click", menu.hide);
    console.log("aaa");
  });
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
    } else if (e.ctrlKey && e.code === "KeyX") {
      cut(selectedMaps);
    }
  });
};
