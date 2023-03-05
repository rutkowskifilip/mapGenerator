import { borderChange } from "../actions/borderChange.js";
import { copiedMaps, setCopiedMaps } from "../variables.js";
import { clear } from "./clear.js";

export const cut = (selectedMaps: HTMLCanvasElement[]) => {
  copiedMaps.forEach((e) => {
    if (Array.from(document.querySelector("body").children).includes(e)) {
      document.querySelector("body").removeChild(e);
    }
  });
  copiedMaps.splice(0, copiedMaps.length);
  setCopiedMaps(selectedMaps, true);
  clear();
  selectedMaps.splice(0, selectedMaps.length);
  borderChange();
};
