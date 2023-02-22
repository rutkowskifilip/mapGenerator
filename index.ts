var sprites = document.getElementById("sprites")
const img = new Image(); 
img.src = "sprites.png"; 
class spriteElement{
x: number;
y: number;
constructor(x:number, y:number){
    this.x = x;
    this.y = y;
}

loadImage():void{
    let div: HTMLDivElement = document.createElement("div")
    
    sprites?.appendChild(div)
    let w:number = img.naturalWidth/32;
    let h:number = img.naturalHeight/16
    div.style.width = w +'px'
    div.style.height = h +'px';
    div.style.background = `url('sprites.png') -${this.x*w}px -${this.y*h}px`;

    // console.log(this.x*w, this.y*h,w, h);
   
}

}
for(let i = 0; i<20; i++){
   for(let j = 0; j<30; j++) {
    var elem = new spriteElement(i,j);
    elem.loadImage()
   }
}
