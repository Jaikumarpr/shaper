"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const shape_1 = __importDefault(require("./shape"));
class Square extends shape_1.default {
    constructor(id, ...args) {
        super(id, 'square', ...args);
    }
    surfaceArea() {
        // square surface area L^2
        return Math.pow(this.args[2], 2);
    }
    toString() {
        return `square with left bottom corner (${this.args[0]}, ${this.args[1]}) and side Length ${this.args[2]}`;
    }
    hasPoint(x, y) {
        if (x > this.args[0] && x < (this.args[0] + this.args[2])) {
            if (y > this.args[1] && y < (this.args[1] + this.args[2])) {
                return true;
            }
        }
        return false;
    }
    getMBR() {
        return {
            minX: this.args[0],
            minY: this.args[1],
            maxX: this.args[0] + this.args[2],
            maxY: this.args[1] + this.args[2],
        };
    }
}
exports.Square = Square;
