import MapElement from "./MapElement";
import { map } from "./variables";

export const load = () => {
  const fileInput: HTMLInputElement = document.getElementById(
    "fileInput"
  ) as HTMLInputElement;
  fileInput.click();
  fileInput.onchange = (e) => {
    if (fileInput.files) {
      const file = fileInput.files[0];
      if (!file) {
        console.error("No file selected");
        return;
      }
      const reader = new FileReader();
      reader.readAsText(file);
      reader.addEventListener("load", () => {
        const data: string = reader.result as string;
        const arr = JSON.parse(data);
        map!.innerHTML = "";
        arr.forEach((e: string, i: number) => {
          const mapElem = new MapElement(i, e);
          mapElem.loadMap();
        });
      });
    }
  };
};
