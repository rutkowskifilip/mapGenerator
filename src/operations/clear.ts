import { borderChange } from "../actions/borderChange";
import { MapI } from "../types";
import { maps, s, selectedMaps, setUndoCount, undoCount } from "../variables";

export const clear = () => {
  const currentChange: MapI[] = new Array();

  selectedMaps.forEach((e) => {
    const ctx = e.getContext("2d") as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, s, s);
    const currentChangeElem: MapI = { id: e.id, url: e.toDataURL() };
    currentChange.push(currentChangeElem);
  });
  maps.splice(maps.length - undoCount, undoCount);
  maps.push(currentChange);
  selectedMaps.splice(0, selectedMaps.length);
  setUndoCount(0);
  borderChange();
};
