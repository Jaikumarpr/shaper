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
    /**
     * Add shapes to R tree collection
     * @param shape
     */
    addShape(shape) {
        const mbr = shape.getMBR();
        this.tree.insert(Object.assign(Object.assign({}, mbr), { obj: shape }));
        console.log(`shape ${shape.id}:  ${shape.toString()}`);
    }
    /**
     * Get shapes which contain a given point
     * @param point
     * @returns
     */
    getIntersectingRectsPoint(point) {
        return this.tree.search({
            minX: point.x,
            minY: point.y,
            maxX: point.x,
            maxY: point.y
        });
    }
    /**
     * Get shapes which overlaps with a given mbr
     * @param mbr minimum bounding rectangle
     * @returns
     */
    getIntersectingRectsShape(mbr) {
        return this.tree.search({
            minX: mbr.minX,
            minY: mbr.minY,
            maxX: mbr.maxX,
            maxY: mbr.maxY
        });
    }
}
exports.default = ShapeStore;
