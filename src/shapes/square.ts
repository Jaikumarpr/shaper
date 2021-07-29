import { mbr } from 'types/common';
import Shape from './shape';

export class Square extends Shape {
    constructor(id: number, ...args: number[]) {
        super(id, 'square', ...args);
    }

    surfaceArea(): number {
        // square surface area L^2
        return Math.pow(this.args[2], 2);
    }

    toString(): string {
        return `square with left bottom corner (${this.args[0]}, ${this.args[1]}) and side Length ${this.args[2]}`
    }

    hasPoint(x: number, y: number): boolean {

        if (x > this.args[0] && x < (this.args[0] + this.args[2])) {
            if (y > this.args[1] && y < (this.args[1] + this.args[2])) {
                return true;
            }
        }
        return false;
    }

    getMBR(): mbr {
        return {
            minX: this.args[0],
            minY: this.args[1],
            maxX: this.args[0] + this.args[2],
            maxY: this.args[1] + this.args[2],
        }
    }
}