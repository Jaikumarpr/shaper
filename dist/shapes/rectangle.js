"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = __importDefault(require("./shape"));
class Rectangle extends shape_1.default {
    constructor(id, ...args) {
        super(id, 'rectangle', ...args);
    }
    surfaceArea() {
        // reactangle surface area l * w;
        return this.args[2] * this.args[3];
    }
    toString() {
        return `reactange with left bottom corner: (${this.args[0]}, ${this.args[1]}), length:${this.args[2]}, width:${this.args[3]}`;
    }
    hasPoint(x, y) {
        if ((x > this.args[0]) && (x < (this.args[0] + this.args[2]))) {
            if ((y > this.args[1]) && (y < (this.args[1] + this.args[3]))) {
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
            maxY: this.args[1] + this.args[3],
        };
    }
}
exports.Rectangle = Rectangle;
