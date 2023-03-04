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
export const mapsToDraw: HTMLCanvasElement[] = new Array();
export const mapsElems: HTMLCanvasElement[] = new Array();
export const maps: { id: string; url: string }[][] = new Array();

export const div = document.createElement("div");
