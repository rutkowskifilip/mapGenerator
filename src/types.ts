export interface MapI {
  id: string;
  url: string;
}
export interface BoundsI {
  left: number;
  top: number;
  right: number;
  bottom: number;
}
export interface PasteI {
  canvas: HTMLCanvasElement;
  bounds: BoundsI;
}
