var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Square = (function (_super) {
    __extends(Square, _super);
    function Square(side, width, height) {
        _super.call(this, width, height);
        this.side = side;
        this.side = side;
    }
    Square.prototype.area = function () { };
    Square.prototype.perimeter = function () { };
    return Square;
})(Rectangle);
var square1 = new Square(20);
console.log("area = " + square1.getArea());
console.log("perimeter = " + square1.getPerimeter());
