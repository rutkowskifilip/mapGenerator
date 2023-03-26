import { mapsElems, selectedMaps } from "../variables";
export const borderChange = (): void => {
  mapsElems.forEach((e) => {
    if (e !== null) {
      e!.style.borderColor = "whitesmoke";
    }
  });

  selectedMaps.forEach((e) => {
    if (e !== null) {
      e!.style.borderColor = "red";
    }
  });
};
