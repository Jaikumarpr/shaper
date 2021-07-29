import { mbr } from 'types/common';
import Shape from './shape';

export default class Donut extends Shape {
    constructor(id: number, ...args: number[]) {
        super(id, 'donut', ...args);
    }

    surfaceArea(): number {
        // circle surface area PI*r_o^2 - PI*r_i^2
        return (Math.PI * Math.pow(this.args[3], 2)) - (Math.PI * Math.pow(this.args[2], 2))
    }

    toString(): string {
        return `Donut with center(${this.args[0]}, ${this.args[1]}), inner radius ${this.args[2]}, outer radius ${this.args[3]}`
    }

    hasPoint(x: number, y: number): boolean {
        // true if distance between inner raius and outer radius
        const distance = Math.sqrt(Math.pow((x - this.args[0]), 2) + Math.pow((y - this.args[1]), 2));
        return (distance > this.args[2]) && (distance < this.args[3]);
    }
    //  get minimum bounding rectangle coordinates
    getMBR(): mbr {
        return {
            minX: this.args[0] - this.args[3],
            minY: this.args[1] - this.args[3],
            maxX: this.args[0] + this.args[3],
            maxY: this.args[1] + this.args[3],
        }
    }
}