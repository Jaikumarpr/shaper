/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import cmdParser from './helpers/parser';
import initPrompt, { rl } from './helpers/readLine';
import { toCliArgs, idGenerator } from './helpers/common';
import shapeFactory from './helpers/shapeFactory';
import { point, shape } from 'types/common';
import ShapeStore from './helpers/shapeStore';
import isValidPath from 'is-valid-path';
import fs from 'fs';
import chalk from 'chalk';
import lineReader from 'line-reader';
import { buildShapeArgs, shapeValidatorFactory } from './helpers/validators';

const idgen = idGenerator;
const shapeStore = new ShapeStore();

class App {
  // middlewares: object[];
  init!: () => void;
  showHelp!: () => void;
  addShape!: (data: shape) => void;
  search!: (cmd: string, ...args: any) => void;
  bulkInsert!: (file: any) => void;
  /* eslint-disable no-useless-constructor */
  constructor() {
  }
}

App.prototype.init = function () {

  cmdParser.on('shape', (data: shape) => {
    this.addShape(data);
  });

  cmdParser.on('find_point', (data: point) => {
    console.log(`searching for shapes with point ${data.x} ${data.y}\n`);
    this.search('point', data.x, data.y);

  });

  cmdParser.on('find_shape', (data: any) => {
    console.log(`searching for shapes which overlaps with shape... ${data.name}\n`);
    this.search('shape', data.name, data.args);

  });

  cmdParser.on('file', (data: any) => {
    console.log(`file  ${data.file}`);
    this.bulkInsert(data.file);
  });

  cmdParser.on('exit', () => {
    rl.emit('SIGINT');
  })

  initPrompt((argStr: string) => {

    let argv = toCliArgs(argStr);

    try {
      cmdParser.parse(argv);
    } catch (error) {

    }
  })
};

App.prototype.addShape = function (data: shape) {
  // generate id
  const id = idgen.id().next().value || 0;
  // make shape object
  const shape = shapeFactory(data.name, id, ...Object.values(data.obj));
  //  add to store
  shapeStore.addShape(shape);
}

App.prototype.search = function (cmd: string, ...args: any) {

  let totalArea = 0;

  if (cmd === "point") {
    shapeStore.getIntersectingRectsPoint({ x: args[0], y: args[1] }).forEach((curVal) => {
      if (curVal.obj.hasPoint(args[0], args[1])) {
        let sfA = Number(curVal.obj.surfaceArea().toPrecision(3));
        console.log(`${curVal.obj.id}: ${curVal.obj.name} with surface area ${curVal.obj.surfaceArea()} contains point (${args[0]}, ${args[1]})`);
        totalArea += sfA;
      }
    })

    console.log(`Total Surface Area for point (${args[0]}, ${args[1]}): ${totalArea}`)
  }

  if (cmd === "shape") {
    const shape = shapeFactory(args[0], 0, ...Object.values(args[1]));
    const mbr = shape.getMBR();
    shapeStore.getIntersectingRectsShape(mbr).forEach((curVal) => {
      console.log(`${curVal.obj.id}: ${curVal.obj.name} with surface area ${curVal.obj.surfaceArea()} overlaps with shape ${args[0]}`);
    })
  }
}

App.prototype.bulkInsert = (file) => {

  if (isValidPath(file)) {
    let readStream = fs.createReadStream(file);

    lineReader.eachLine(readStream, function (line) {

      const shapeChunk = line.toString().trim().split(' ');

      const _shape = shapeChunk.shift();

      const { error, value } = shapeValidatorFactory(_shape).validate(buildShapeArgs(_shape, shapeChunk));

      if (error) {
        throw new Error(`${chalk.redBright(error.name)}: ${chalk.yellowBright(error.message)}`)
      }

      // generate id
      const id = idgen.id().next().value || 0;
      // make shape object
      const shapeObj = shapeFactory(_shape, id, ...Object.values(value));
      //  add to store
      shapeStore.addShape(shapeObj);
    });
  }
}

const app = new App();
export default app;