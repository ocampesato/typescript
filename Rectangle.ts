class Rectangle implements IRect {
     constructor(public width:number,
                 public height:number) {
         this.width  = width;
         this.height = height; 
     }

     public getArea()      { return width*height }
     public getPerimeter() { return 2*(width+height) }
}

