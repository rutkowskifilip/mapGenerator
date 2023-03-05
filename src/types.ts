export interface MapI {
  id: string;
  url: string;
}
export interface BoundsI {
  left: number;
  top: number;
}
export interface PasteI {
  canvas: HTMLCanvasElement;
  bounds: BoundsI;
}
export interface ContextMenuI {
  undo: HTMLDivElement;
  redo: HTMLDivElement;
  copy: HTMLDivElement;
  cut: HTMLDivElement;
  paste: HTMLDivElement;
  save: HTMLDivElement;
  load: HTMLDivElement;
}
