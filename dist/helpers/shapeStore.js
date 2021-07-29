"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rbush_1 = __importDefault(require("rbush"));
class ShapeStore {
    constructor() {
        this.tree = new rbush_1.default(9);
    }
    addShape(shape) {
        const mbr = shape.getMBR();
        this.tree.insert(Object.assign(Object.assign({}, mbr), { obj: shape }));
        console.log(`shape ${shape.id}:  ${shape.toString()}`);
    }
    getIntersectingRectsPoint(point) {
        return this.tree.search({
            minX: point.x,
            minY: point.y,
            maxX: point.x,
            maxY: point.y
        });
    }
    getIntersectingRectsShape(mbr) {
        return this.tree.search({
            minX: mbr.minX,
            minY: mbr.minY,
            maxX: mbr.maxX,
            maxY: mbr.maxy
        });
    }
}
exports.default = ShapeStore;
