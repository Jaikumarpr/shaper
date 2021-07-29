"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidShapeCmd = exports.validateNumber = exports.fpSchema = exports.pointSchema = exports.buildShapeArgs = exports.shapeValidatorFactory = exports.numberValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const is_valid_path_1 = __importDefault(require("is-valid-path"));
const common_1 = require("../helpers/common");
exports.numberValidator = joi_1.default.number().precision(3).required();
const shapeValidatorFactory = (shape) => {
    switch (shape) {
        case 'circle':
            return joi_1.default.object({
                x: exports.numberValidator,
                y: exports.numberValidator,
                r: exports.numberValidator.positive(),
            });
        case 'square':
            return joi_1.default.object({
                x: exports.numberValidator,
                y: exports.numberValidator,
                l: exports.numberValidator.positive(),
            });
        case 'rectangle':
            return joi_1.default.object({
                x: exports.numberValidator,
                y: exports.numberValidator,
                l: exports.numberValidator.positive(),
                w: exports.numberValidator.positive(),
            });
        case 'triangle':
            return joi_1.default.object({
                x1: exports.numberValidator,
                y1: exports.numberValidator,
                x2: exports.numberValidator,
                y2: exports.numberValidator,
                x3: exports.numberValidator,
                y3: exports.numberValidator,
            });
        case 'donut':
            return joi_1.default.object({
                x: exports.numberValidator,
                y: exports.numberValidator,
                ri: exports.numberValidator.positive(),
                ro: exports.numberValidator.positive(),
            });
        default:
            return joi_1.default.object({});
    }
};
exports.shapeValidatorFactory = shapeValidatorFactory;
const buildShapeArgs = (shape, args) => {
    const shArgs = common_1.shapeArgs.get(shape) || [];
    if ((shArgs === null || shArgs === void 0 ? void 0 : shArgs.length) !== args.length) {
        console.error('argument error: internal');
    }
    let argObj = {};
    for (let i = 0; i < args.length; i++) {
        Object.defineProperty(argObj, shArgs[i], {
            value: args[i],
            enumerable: true
        });
    }
    return argObj;
};
exports.buildShapeArgs = buildShapeArgs;
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
exports.pointSchema = joi_1.default.object({
    x: exports.numberValidator,
    y: exports.numberValidator,
});
exports.fpSchema = joi_1.default.object({
    fp: joi_1.default.custom((value, helper) => {
        if (!is_valid_path_1.default(value)) {
            return helper.error("any.invalidfilepath");
        }
        return value;
    }),
});
const validateNumber = (val, dummyVal) => {
    joi_1.default.attempt(val, joi_1.default.number());
};
exports.validateNumber = validateNumber;
const isValidShapeCmd = (cmd) => {
    return Boolean(common_1.shapes.indexOf(cmd));
};
exports.isValidShapeCmd = isValidShapeCmd;
