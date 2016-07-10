var Rectangle = (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () { return width * height; };
    Rectangle.prototype.getPerimeter = function () { return 2 * (width + height); };
    return Rectangle;
})();
