export class Cylinder {

    private static getPerimeter(radius: number): number {
        return 2 * Math.PI * radius;
    }

    private static getBaseArea(radius: number): number {
        return Math.PI * radius * radius;
    }

    public static getTotalArea(radius: number, height: number): number {
        let baseArea: number = this.getBaseArea(radius);
        let perimeter: number = this.getPerimeter(radius);
        let totalArea: number = perimeter * height + 2 * baseArea;
        return totalArea;
    }
}