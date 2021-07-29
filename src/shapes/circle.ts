import { mbr } from 'types/common';
import Shape from './shape';

export default class Circle extends Shape {
    constructor(id: number, ...args: number[]) {
        super(id, 'circle', ...args);
    }

    surfaceArea(): number {
        // circle surface area PI*r^2
        return Math.PI * Math.pow(this.args[2], 2);
    }

    toString(): string {
        return `circle with center(${this.args[0]}, ${this.args[1]}) and radius ${this.args[2]}`
    }

    hasPoint(x: number, y: number): boolean {
        // true if distance between point and center less than radius
        return Math.sqrt(Math.pow((x - this.args[0]), 2) + Math.pow((y - this.args[1]), 2)) < this.args[2];
    }
    //  get minimum bounding rectangle coordinates
    getMBR(): mbr {
        return {
            minX: this.args[0] - this.args[2],
            minY: this.args[1] - this.args[2],
            maxX: this.args[0] + this.args[2],
            maxY: this.args[1] + this.args[2],
        }
    }
}