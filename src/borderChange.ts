import { mapsElems, mapsToDraw } from "./variables.js";
export const borderChange = (): void => {
  mapsElems.forEach((e) => {
    if (e !== null) {
      e!.style.borderColor = "whitesmoke";
    }
  });

  mapsToDraw.forEach((e) => {
    if (e !== null) {
      e!.style.borderColor = "red";
    }
  });
};
