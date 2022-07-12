"use strict";
exports.__esModule = true;
exports.Cylinder = void 0;
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.getPerimeter = function (radius) {
        return 2 * Math.PI * radius;
    };
    Cylinder.getBaseArea = function (radius) {
        return Math.PI * radius * radius;
    };
    Cylinder.getTotalArea = function (radius, height) {
        var baseArea = this.getBaseArea(radius);
        var perimeter = this.getPerimeter(radius);
        var totalArea = perimeter * height + 2 * baseArea;
        return totalArea;
    };
    return Cylinder;
}());
exports.Cylinder = Cylinder;
