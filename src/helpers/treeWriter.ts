// import chalk from 'chalk';
// import stream from 'stream';
// import shapeFactory from './shapeFactory';
// import { buildShapeArgs, shapeValidatorFactory } from './validators';

// export default class TreeWriter extends stream.Writable {
//     store: any;
//     idGen: any;

//     constructor(options: any) {
//         super(options)
//         this.store = options.store;
//         this.idGen = options.idgen;
//     }
//     _write(chunk: any, callback: any) {

//         const shapeChunk = chunk.toString().trim().split(' ');
//         console.log(shapeChunk);
//         const _shape = shapeChunk.shift();
//         const { error, value } = shapeValidatorFactory(_shape).validate(buildShapeArgs(shapeChunk));

//         if (error) {
//             throw new Error(`${chalk.redBright(error.name)}: ${chalk.yellowBright(error.message)}`)
//         }

//         // generate id
//         const id = this.idGen.id().next().value || 0;
//         // make shape object
//         const shapeObj = shapeFactory(_shape, id, ...Object.values(value));
//         this.store.addShape(shapeObj);

//         callback();
//     }
// }