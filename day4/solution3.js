class Polygon {
    constructor(lengths) {
        this.lengths = lengths;
    }
    perimeter() {
        return this.lengths.reduce(function (a, b) { return a + b; });
    }
}