import Rbush, { BBox } from 'rbush';
import Shape from 'shapes/shape';
import { IShape, itemObj, point } from 'types/common';

export default class ShapeStore {
    tree: Rbush<itemObj>;

    constructor() {
        this.tree = new Rbush(9);
    }
    /**
     * Add shapes to R tree collection
     * @param shape 
     */

    addShape(shape: IShape) {
        const mbr = shape.getMBR();
        this.tree.insert({ ...mbr, obj: shape });
        console.log(`shape ${shape.id}:  ${shape.toString()}`);
    }
    /**
     * Get shapes which contain a given point
     * @param point 
     * @returns 
     */
    getIntersectingRectsPoint(point: point): itemObj[] {
        return this.tree.search({
            minX: point.x,
            minY: point.y,
            maxX: point.x,
            maxY: point.y
        })
    }
    /**
     * Get shapes which overlaps with a given mbr
     * @param mbr minimum bounding rectangle
     * @returns 
     */
    getIntersectingRectsShape(mbr: any): itemObj[] {
        return this.tree.search({
            minX: mbr.minX,
            minY: mbr.minY,
            maxX: mbr.maxX,
            maxY: mbr.maxY
        })
    }
}

