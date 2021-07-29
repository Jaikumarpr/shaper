"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const shape_1 = __importDefault(require("./shape"));
const point_in_triangle_1 = __importDefault(require("point-in-triangle"));
class Triangle extends shape_1.default {
    constructor(id, ...args) {
        super(id, 'triangle', ...args);
    }
    surfaceArea() {
        // square surface area L^2
        return 0.5 * ((this.args[0] * (this.args[3] - this.args[5])) +
            (this.args[2] * (this.args[5] - this.args[1])) + (this.args[4] * (this.args[1] - this.args[3])));
    }
    toString() {
        return `traingle with points: (x1:${this.args[0]}, y1:${this.args[1]}), (x2:${this.args[2]}, y2:${this.args[3]}), (x3:${this.args[4]}, y3:${this.args[5]})`;
    }
    hasPoint(x, y) {
        if (point_in_triangle_1.default([x, y], [[this.args[0], this.args[1]], [this.args[2], this.args[3]], [this.args[4], this.args[5]]])) {
            return true;
        }
        return false;
    }
    getMBR() {
        return {
            minX: Math.min(this.args[0], this.args[2], this.args[4]),
            minY: Math.min(this.args[1], this.args[3], this.args[5]),
            maxX: Math.max(this.args[0], this.args[2], this.args[4]),
            maxY: Math.max(this.args[1], this.args[3], this.args[5]),
        };
    }
}
exports.Triangle = Triangle;
