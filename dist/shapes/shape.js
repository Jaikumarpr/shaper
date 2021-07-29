"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    constructor(id, name, ...args) {
        this.name = name;
        this.args = args;
        this.id = id;
    }
    hasPoint(x, y) {
        throw new Error('Method not implemented.');
    }
    toString() {
        throw new Error('Method not implemented.');
    }
    surfaceArea() {
        throw new Error('Method not implemented.');
    }
    getMBR() {
        throw new Error('Method not implemented.');
    }
}
exports.default = Shape;
