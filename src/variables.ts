import { MapI } from "./types.js";

export const sprites = document.getElementById("sprites");
export const map = document.getElementById("map");

export const img = new Image();

export const automatic: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("automatic")
);

export const s: number =
  (sprites?.offsetWidth !== undefined ? sprites?.offsetWidth - 64 : 0) / 16;
export const m: number = map?.offsetWidth !== undefined ? map?.offsetWidth : 0;

export let clickedSprite: string;
export const selectedMaps: HTMLCanvasElement[] = new Array();
export let copiedMaps: HTMLCanvasElement[] = new Array();
export const mapsElems: HTMLCanvasElement[] = new Array();
export const maps: MapI[][] = new Array();

export const div = document.createElement("div");
export let undoCount = 0;
export const setUndoCount = (x: number) => {
  undoCount = x;
};
export const setCopiedMaps = (maps: HTMLCanvasElement[], cut: boolean) => {
  if (cut) {
    maps.forEach((e) => {
      const canvas = document.createElement("canvas");
      canvas.width = s;
      canvas.height = s;
      canvas.style.position = "absolute";
      canvas.style.top = e.getBoundingClientRect().top + "px";
      canvas.style.left = e.getBoundingClientRect().left + "px";
      canvas.style.opacity = "0";
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.addEventListener("load", () => {
        ctx.drawImage(img, 0, 0);
      });
      document.querySelector("body").appendChild(canvas);
      const bound = canvas.getBoundingClientRect();
      img.src = e.toDataURL();
      copiedMaps.push(canvas);
    });
  } else {
    maps.forEach((e) => {
      copiedMaps.push(e);
    });
  }
};
