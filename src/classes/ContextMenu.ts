import { ContextMenuI } from "../types";
import { selectedMaps } from "../variables";

export class ContextMenu implements ContextMenuI {
  parent = document.getElementById("contextMenu");
  undo: HTMLDivElement;
  redo: HTMLDivElement;
  copy: HTMLDivElement;
  cut: HTMLDivElement;
  paste: HTMLDivElement;
  save: HTMLDivElement;
  load: HTMLDivElement;
  constructor(
    undo: () => void,
    redo: () => void,
    copy: (selectedMaps: HTMLCanvasElement[]) => void,
    cut: (selectedMaps: HTMLCanvasElement[]) => void,
    paste: () => void,
    save: () => void,
    load: () => void
  ) {
    this.undo = document.createElement("div");
    this.undo.innerHTML = "<p>undo</p><p class='shortcut'>ctrl + Z</p>";
    this.undo.style.borderTop = "none";
    this.undo.addEventListener("click", undo);

    this.redo = document.createElement("div");
    this.redo.innerHTML = "<p>redo</p><p class='shortcut'>ctrl + Y</p>";
    this.redo.addEventListener("click", redo);

    this.copy = document.createElement("div");
    this.copy.innerHTML = "<p>copy</p><p class='shortcut'>ctrl + C</p>";
    this.copy.style.borderTopColor = "whitesmoke";
    this.copy.style.borderTopStyle = "solid";
    this.copy.addEventListener("click", () => copy(selectedMaps));

    this.cut = document.createElement("div");
    this.cut.innerHTML = "<p>cut</p><p class='shortcut'>ctrl + X</p>";
    this.cut.addEventListener("click", () => cut(selectedMaps));

    this.paste = document.createElement("div");
    this.paste.innerHTML = "<p>paste</p><p class='shortcut'>ctrl + V</p>";
    this.paste.addEventListener("click", paste);

    this.save = document.createElement("div");
    this.save.innerHTML = "<p>save</p><p class='shortcut'>ctrl + S</p>";
    this.save.style.borderTopColor = "whitesmoke";
    this.save.style.borderTopStyle = "solid";
    this.save.addEventListener("click", save);

    this.load = document.createElement("div");
    this.load.innerHTML = "<p>load</p><p class='shortcut'>ctrl + L</p>";
    this.load.addEventListener("click", load);

    this.parent.appendChild(this.undo);
    this.parent.appendChild(this.redo);
    this.parent.appendChild(this.copy);
    this.parent.appendChild(this.cut);
    this.parent.appendChild(this.paste);
    this.parent.appendChild(this.save);
    this.parent.appendChild(this.load);
  }
  show = (x: number, y: number) => {
    this.parent.style.display = "flex";
    this.parent.style.left = x + "px";
    this.parent.style.top = y + "px";
  };
  hide = () => {
    this.parent.style.display = "none";
  };
}
