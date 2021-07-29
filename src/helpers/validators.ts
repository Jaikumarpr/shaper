import joi, { string } from 'joi';
import { InvalidArgumentError } from 'commander';
import isValidpath from 'is-valid-path';
import { shapes, shapeArgs } from '../helpers/common';
import { Transform } from 'stream';


export const numberValidator = joi.number().precision(3).required();

export const shapeValidatorFactory = (shape: any) => {

    switch (shape) {
        case 'circle':
            return joi.object({
                x: numberValidator,
                y: numberValidator,
                r: numberValidator.positive(),
            });
        case 'square':
            return joi.object({
                x: numberValidator,
                y: numberValidator,
                l: numberValidator.positive(),
            });
        case 'rectangle':
            return joi.object({
                x: numberValidator,
                y: numberValidator,
                l: numberValidator.positive(),
                w: numberValidator.positive(),
            });
        case 'triangle':
            return joi.object({
                x1: numberValidator,
                y1: numberValidator,
                x2: numberValidator,
                y2: numberValidator,
                x3: numberValidator,
                y3: numberValidator,
            });
        case 'donut':
            return joi.object({
                x: numberValidator,
                y: numberValidator,
                ri: numberValidator.positive(),
                ro: numberValidator.positive(),
            });
        default:
            return joi.object({});
    }
}

export const buildShapeArgs = (shape: any, args: any[]) => {

    const shArgs = shapeArgs.get(shape) || [];
    if (shArgs?.length !== args.length) {
        console.error('argument error: internal')
    }
    let argObj = {};
    for (let i = 0; i < args.length; i++) {
        Object.defineProperty(argObj, shArgs[i],
            {
                value: args[i],
                enumerable: true
            })
    }

    return argObj;

}

// export const circleSchema = joi.object({
//     x: numberValidator,
//     y: numberValidator,
//     r: numberValidator.positive(),
// });

// export const squareSchema = joi.object({
//     x: numberValidator,
//     y: numberValidator,
//     l: numberValidator.positive(),
// });

// export const rectangleSchema = joi.object({
//     x: numberValidator,
//     y: numberValidator,
//     l: numberValidator.positive(),
//     w: numberValidator.positive(),
// });

// export const donutSchema = joi.object({
//     x: numberValidator,
//     y: numberValidator,
//     ri: numberValidator.positive(),
//     ro: numberValidator.positive(),
// });

// export const triangleSchema = joi.object({
//     x1: numberValidator,
//     y1: numberValidator,
//     x2: numberValidator,
//     y2: numberValidator,
//     x3: numberValidator,
//     y3: numberValidator,
// });

export const pointSchema = joi.object({
    x: numberValidator,
    y: numberValidator,
});

export const fpSchema = joi.object({
    fp: joi.custom((value, helper) => {
        if (!isValidpath(value)) {
            return helper.error("any.invalidfilepath");
        }
        return value;
    }),
});


export const validateNumber = (val: any, dummyVal: any) => {
    joi.attempt(val, joi.number());
}

export const isValidShapeCmd = (cmd: any) => {
    return Boolean(shapes.indexOf(cmd));
}
