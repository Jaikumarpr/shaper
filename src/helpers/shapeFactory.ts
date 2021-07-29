import Donut from '../shapes/donut';
import { Rectangle } from '../shapes/rectangle';
import { Square } from '../shapes/square';
import { Triangle } from '../shapes/triangle';
import Circle from '../shapes/circle';
import Shape from '../shapes/shape';

export default (shape: any, id: number, ...args: any): Shape => {
    if (shape === 'circle') {
        return new Circle(id, ...args)
    }

    if (shape === 'square') {
        return new Square(id, ...args)
    }

    if (shape === 'rectangle') {
        return new Rectangle(id, ...args)
    }

    if (shape === 'triangle') {
        return new Triangle(id, ...args)
    }

    if (shape === 'donut') {
        return new Donut(id, ...args)
    }

    return new Shape(5, 'null', 0, 0);
}