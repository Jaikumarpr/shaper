import { mbr } from 'types/common';
import Shape from './shape';
import isPointInTriangle from 'point-in-triangle';

export class Triangle extends Shape {
    constructor(id: number, ...args: number[]) {
        super(id, 'triangle', ...args);
    }

    surfaceArea(): number {

        return 0.5 * ((this.args[0] * (this.args[3] - this.args[5])) +
            (this.args[2] * (this.args[5] - this.args[1])) + (this.args[4] * (this.args[1] - this.args[3])))
    }

    toString(): string {
        return `traingle with points: (x1:${this.args[0]}, y1:${this.args[1]}), (x2:${this.args[2]}, y2:${this.args[3]}), (x3:${this.args[4]}, y3:${this.args[5]})`
    }

    hasPoint(x: number, y: number): boolean {

        if (isPointInTriangle([x, y], [[this.args[0], this.args[1]], [this.args[2], this.args[3]], [this.args[4], this.args[5]]])) {
            return true;
        }
        return false;
    }

    getMBR(): mbr {


        return {
            minX: Math.min(this.args[0], this.args[2], this.args[4]),
            minY: Math.min(this.args[1], this.args[3], this.args[5]),
            maxX: Math.max(this.args[0], this.args[2], this.args[4]),
            maxY: Math.max(this.args[1], this.args[3], this.args[5]),
        }
    }
}