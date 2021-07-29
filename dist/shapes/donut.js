"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(require("./shape"));
class Donut extends shape_1.default {
    constructor(id, ...args) {
        super(id, 'donut', ...args);
    }
    surfaceArea() {
        // circle surface area PI*r_o^2 - PI*r_i^2
        return (Math.PI * Math.pow(this.args[3], 2)) - (Math.PI * Math.pow(this.args[2], 2));
    }
    toString() {
        return `Donut with center(${this.args[0]}, ${this.args[1]}), inner radius ${this.args[2]}, outer radius ${this.args[3]}`;
    }
    hasPoint(x, y) {
        // true if distance between inner raius and outer radius
        const distance = Math.sqrt(Math.pow((x - this.args[0]), 2) + Math.pow((y - this.args[1]), 2));
        return (distance > this.args[2]) && (distance < this.args[3]);
    }
    //  get minimum bounding rectangle coordinates
    getMBR() {
        return {
            minX: this.args[0] - this.args[3],
            minY: this.args[1] - this.args[3],
            maxX: this.args[0] + this.args[3],
            maxY: this.args[1] + this.args[3],
        };
    }
}
exports.default = Donut;
