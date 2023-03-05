import { borderChange } from "../actions/borderChange.js";
import { copiedMaps, setCopiedMaps } from "../variables.js";

export const copy = (selectedMaps: HTMLCanvasElement[]) => {
  setCopiedMaps(selectedMaps);
  selectedMaps.splice(0, selectedMaps.length);
  borderChange();
};
