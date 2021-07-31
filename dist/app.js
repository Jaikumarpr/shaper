"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
const parser_1 = __importDefault(require("./helpers/parser"));
const readLine_1 = __importStar(require("./helpers/readLine"));
const common_1 = require("./helpers/common");
const shapeFactory_1 = __importDefault(require("./helpers/shapeFactory"));
const shapeStore_1 = __importDefault(require("./helpers/shapeStore"));
const is_valid_path_1 = __importDefault(require("is-valid-path"));
const fs_1 = __importDefault(require("fs"));
const chalk_1 = __importDefault(require("chalk"));
const line_reader_1 = __importDefault(require("line-reader"));
const validators_1 = require("./helpers/validators");
const idgen = common_1.idGenerator;
const shapeStore = new shapeStore_1.default();
class App {
    /* eslint-disable no-useless-constructor */
    constructor() {
    }
}
App.prototype.init = function () {
    parser_1.default.on('shape', (data) => {
        this.addShape(data);
    });
    parser_1.default.on('find_point', (data) => {
        console.log(`searching for shapes with point ${data.x} ${data.y}`);
        this.search('point', data.x, data.y);
    });
    parser_1.default.on('find_shape', (data) => {
        console.log(`searching for shapes which overlaps with shape... ${data.name}`);
        this.search('shape', data.name, data.args);
    });
    parser_1.default.on('file', (data) => {
        console.log(`file  ${data.file}`);
        this.bulkInsert(data.file);
    });
    parser_1.default.on('exit', () => {
        readLine_1.rl.emit('SIGINT');
    });
    readLine_1.default((argStr) => {
        let argv = common_1.toCliArgs(argStr);
        try {
            parser_1.default.parse(argv);
        }
        catch (error) {
        }
    });
};
App.prototype.addShape = function (data) {
    // generate id
    const id = idgen.id().next().value || 0;
    // make shape object
    const shape = shapeFactory_1.default(data.name, id, ...Object.values(data.obj));
    //  add to store
    shapeStore.addShape(shape);
};
App.prototype.search = function (cmd, ...args) {
    let totalArea = 0;
    if (cmd === "point") {
        shapeStore.getIntersectingRectsPoint({ x: args[0], y: args[1] }).forEach((curVal) => {
            if (curVal.obj.hasPoint(args[0], args[1])) {
                let sfA = Number(curVal.obj.surfaceArea().toPrecision(3));
                console.log(`${curVal.obj.id}: ${curVal.obj.name} with surface area ${curVal.obj.surfaceArea()} contains point (${args[0]}, ${args[1]})`);
                totalArea += sfA;
            }
        });
        console.log(`Total Surface Area for point (${args[0]}, ${args[1]}): ${totalArea}`);
    }
    if (cmd === "shape") {
        const shape = shapeFactory_1.default(args[0], 0, ...Object.values(args[1]));
        const mbr = shape.getMBR();
        shapeStore.getIntersectingRectsShape(mbr).forEach((curVal) => {
            console.log(`${curVal.obj.id}: ${curVal.obj.name} with surface area ${curVal.obj.surfaceArea()} overlaps with shape ${args[0]}`);
        });
    }
};
App.prototype.bulkInsert = (file) => {
    if (is_valid_path_1.default(file)) {
        let readStream = fs_1.default.createReadStream(file);
        line_reader_1.default.eachLine(readStream, function (line) {
            const shapeChunk = line.toString().trim().split(' ');
            const _shape = shapeChunk.shift();
            const { error, value } = validators_1.shapeValidatorFactory(_shape).validate(validators_1.buildShapeArgs(_shape, shapeChunk));
            if (error) {
                throw new Error(`${chalk_1.default.redBright(error.name)}: ${chalk_1.default.yellowBright(error.message)}`);
            }
            // generate id
            const id = idgen.id().next().value || 0;
            // make shape object
            const shapeObj = shapeFactory_1.default(_shape, id, ...Object.values(value));
            //  add to store
            shapeStore.addShape(shapeObj);
        });
    }
};
const app = new App();
exports.default = app;
