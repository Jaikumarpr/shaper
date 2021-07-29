export interface IShape {
    id: number;
    name: string;
    args: number[];
    surfaceArea(): number;
    toString(): string;
    hasPoint(x: number, y: number): boolean;
    getMBR(): mbr;
}

export interface IParser {
    program: any;
    name: string;
    args: number[];
    surfaceArea(): number;
    toString(): string;
    hasPoint(x: number, y: number): boolean;
}

export type shape = {
    name: string,
    obj: any
}

export type mbr = {
    minX: number,
    minY: number,
    maxX: number,
    maxY: number
}

export type itemObj = {
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
    obj: IShape
}

export type point = {
    x: number,
    y: number
}