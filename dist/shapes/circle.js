"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(require("./shape"));
class Circle extends shape_1.default {
    constructor(id, ...args) {
        super(id, 'circle', ...args);
    }
    surfaceArea() {
        // circle surface area PI*r^2
        return Math.PI * Math.pow(this.args[2], 2);
    }
    toString() {
        return `circle with center(${this.args[0]}, ${this.args[1]}) and radius ${this.args[2]}`;
    }
    hasPoint(x, y) {
        // true if distance between point and center less than radius
        return Math.sqrt(Math.pow((x - this.args[0]), 2) + Math.pow((y - this.args[1]), 2)) < this.args[2];
    }
    //  get minimum bounding rectangle coordinates
    getMBR() {
        return {
            minX: this.args[0] - this.args[2],
            minY: this.args[1] - this.args[2],
            maxX: this.args[0] + this.args[2],
            maxY: this.args[1] + this.args[2],
        };
    }
}
exports.default = Circle;
