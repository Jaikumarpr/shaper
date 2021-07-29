"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shapeArgs = exports.shapes = exports.idGenerator = exports.toCliArgs = void 0;
//  format to process argv length
const toCliArgs = (argStr) => {
    let argv = argStr.split(' ');
    for (let index = 0; index < 2; index++) {
        argv.unshift(' ');
    }
    return argv;
};
exports.toCliArgs = toCliArgs;
// simple id generator
class IdGenerator {
    constructor() {
        this.currentId = 0;
    }
    *id() {
        yield this.currentId++;
    }
}
exports.idGenerator = new IdGenerator();
exports.shapes = ['circle', 'rectangle', 'square', 'donut', 'triangle'];
exports.shapeArgs = new Map([
    ['circle', ['x', 'y', 'r']],
    ['square', ['x', 'y', 'l']],
    ['rectangle', ['x', 'y', 'l', 'w']],
    ['triangle', ['x1', 'y1', 'x2', 'y2', 'x3', 'y3']],
    ['donut', ['x', 'y', 'ri', 'ro']]
]);
