import { IShape, mbr } from '../types/common';

export default class Shape implements IShape {
    name: string;
    id: number;
    args: number[];

    constructor(id: number, name: string, ...args: any) {
        this.name = name;
        this.args = args;
        this.id = id;
    }

    hasPoint(x: number, y: number): boolean {
        throw new Error('Method not implemented.');
    }

    toString(): string {
        throw new Error('Method not implemented.');
    }

    surfaceArea(): number {
        throw new Error('Method not implemented.');
    }

    getMBR(): mbr {
        throw new Error('Method not implemented.');
    }
}