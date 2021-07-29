
//  format to process argv length
export const toCliArgs = (argStr: string) => {
    let argv = argStr.split(' ');
    for (let index = 0; index < 2; index++) {
        argv.unshift(' ');
    }

    return argv;
}

// simple id generator
class IdGenerator {
    currentId: number;
    constructor() {
        this.currentId = 0;
    }

    *id() {
        yield this.currentId++;
    }
}

export const idGenerator = new IdGenerator();

export const shapes = ['circle', 'rectangle', 'square', 'donut', 'triangle'];

export const shapeArgs = new Map([
    ['circle', ['x', 'y', 'r']],
    ['square', ['x', 'y', 'l']],
    ['rectangle', ['x', 'y', 'l', 'w']],
    ['triangle', ['x1', 'y1', 'x2', 'y2', 'x3', 'y3']],
    ['donut', ['x', 'y', 'ri', 'ro']]
])
