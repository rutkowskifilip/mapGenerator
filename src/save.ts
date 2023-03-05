export const save = () => {
  const elems: HTMLCanvasElement[] = Array.from(
    document.getElementsByClassName("mapElem")
  ) as HTMLCanvasElement[];
  const urls: string[] = new Array();
  elems.forEach((e) => {
    urls.push(e.toDataURL());
  });
  const data = JSON.stringify(urls);
  const type = "application/json";
  const name = window.prompt("Filename", "");
  if (name) {
    const filename = name + ".json";
    const blob = new Blob([data], { type: type });
    console.log(blob);

    const url = URL.createObjectURL(blob);
    console.log(url);

    const link = document.createElement("a");
    link.innerText = "save";
    link.href = url;
    link.download = filename;

    document.body.appendChild(link);

    link.click();
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 0);

    document.body.removeChild(link);
  }
};
