import { mbr } from 'types/common';
import Shape from './shape';

export class Rectangle extends Shape {
    constructor(id: number, ...args: number[]) {
        super(id, 'rectangle', ...args);
    }

    surfaceArea(): number {
        // reactangle surface area l * w;
        return this.args[2] * this.args[3];
    }

    toString(): string {
        return `reactange with left bottom corner: (${this.args[0]}, ${this.args[1]}), length:${this.args[2]}, width:${this.args[3]}`
    }

    hasPoint(x: number, y: number): boolean {

        if ((x > this.args[0]) && (x < (this.args[0] + this.args[2]))) {
            if ((y > this.args[1]) && (y < (this.args[1] + this.args[3]))) {
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
            maxY: this.args[1] + this.args[3],
        }
    }
}