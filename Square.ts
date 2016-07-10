class Square extends Rectangle {
     constructor(public side:number, width:number, height:number) {
        super(width, height);
        this.side = side;
     }

     area(): void {}
     perimeter(): void {}
}

var square1 = new Square(20);
console.log("area = "+square1.getArea());
console.log("perimeter = "+square1.getPerimeter());

