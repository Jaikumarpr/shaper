"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const validators_1 = require("./validators");
class Parser extends events_1.EventEmitter {
    constructor() {
        super();
        this.program = new commander_1.Command();
        this.initOptions();
        this.initCommands();
    }
    parse(argv) {
        this.program.parse(argv);
    }
    initOptions() {
        this.program.version('1.0.0').description('Shaper');
        this.program.exitOverride();
        this.program.allowExcessArguments(false);
        this.program
            .configureOutput({
            writeOut: (str) => process.stdout.write(`[OUT] ${str}`),
            writeErr: (str) => process.stdout.write(`${chalk_1.default.redBright('ERROR')}: ${str}`),
            outputError: (str, write) => write(chalk_1.default.yellowBright(str.split(':')[1].trim()))
        });
    }
    initCommands() {
        this.program
            .command('circle')
            .description('Add circle shape to collection')
            .argument('<x>', ' x coordinate of center of circle')
            .argument('<y>', ' y coordinate of center of circle')
            .argument('<r>', ' radius of circle')
            .action((...args) => {
            const argsObj = { x: args[0], y: args[1], r: args[2] };
            // validate arguments
            const { error, value } = validators_1.shapeValidatorFactory('circle').validate(argsObj);
            if (error) {
                console.error(`${chalk_1.default.redBright(error.name)}: ${chalk_1.default.yellowBright(error.message)}`);
                return;
            }
            this.emit('shape', { name: 'circle', obj: value });
        });
        this.program
            .command('square')
            .description('Add square shape to collection')
            .argument('<x>', ' x coordinate of left bottom corner')
            .argument('<y>', ' y coordinate of left bottom corner')
            .argument('<l>', ' length of side')
            .action((...args) => {
            const argsObj = { x: args[0], y: args[1], l: args[2] };
            // validate arguments
            const { error, value } = validators_1.shapeValidatorFactory('square').validate(argsObj);
            if (error) {
                console.log(`${chalk_1.default.redBright(error.name)}: ${chalk_1.default.yellowBright(error.message)}`);
                return;
            }
            this.emit('shape', { name: 'square', obj: value });
        });
        this.program
            .command('rectangle')
            .description('Add rectangle shape to collection')
            .argument('<x>', ' x coordinate of left bottom corner')
            .argument('<y>', ' y coordinate of left bottom corner')
            .argument('<l>', ' length of rectangle')
            .argument('<w>', ' width of rectangle')
            .action((...args) => {
            const argsObj = { x: args[0], y: args[1], l: args[2], w: args[3] };
            // validate arguments
            const { error, value } = validators_1.shapeValidatorFactory('rectangle').validate(argsObj);
            if (error) {
                console.log(`${chalk_1.default.redBright(error.name)}: ${chalk_1.default.yellowBright(error.message)}`);
                return;
            }
            this.emit('shape', { name: 'rectangle', obj: value });
        });
        this.program
            .command('triangle')
            .description('Add triangle shape to collection')
            .argument('<x1>', ' x1 coordinate of triangle')
            .argument('<y1>', ' y1 coordinate of triangle')
            .argument('<x2>', ' x2 coordinate of triangle')
            .argument('<y2>', ' y2 coordinate of triangle')
            .argument('<x3>', ' x3 coordinate of triangle')
            .argument('<y3>', ' y3 coordinate of triangle')
            .action((...args) => {
            const argsObj = { x1: args[0], y1: args[1], x2: args[2], y2: args[3], x3: args[4], y3: args[5] };
            // validate arguments
            const { error, value } = validators_1.shapeValidatorFactory('triangle').validate(argsObj);
            if (error) {
                console.log(`${chalk_1.default.redBright(error.name)}: ${chalk_1.default.yellowBright(error.message)}`);
                return;
            }
            this.emit('shape', { name: 'triangle', obj: value });
        });
        this.program
            .command('donut')
            .description('Add donut shape to collection')
            .argument('<x>', ' x coordinate of center of circle')
            .argument('<y>', ' y coordinate of center of circle')
            .argument('<ri>', ' inner radius of donut')
            .argument('<ro>', ' outer radius of donut')
            .action((...args) => {
            const argsObj = { x: args[0], y: args[1], ri: args[2], ro: args[3] };
            // validate arguments
            const { error, value } = validators_1.shapeValidatorFactory('donut').validate(argsObj);
            if (error) {
                console.log(`${chalk_1.default.redBright(error.name)}: ${chalk_1.default.yellowBright(error.message)}`);
                return;
            }
            this.emit('shape', { name: 'donut', obj: value });
        });
        this.program
            .command('search')
            .description('Add donut shape to collection')
            .argument('<x>', ' x coordinate of center of circle')
            .argument('<y>', ' y coordinate of center of circle')
            .action((...args) => {
            const argsObj = { x: args[0], y: args[1] };
            const { error, value } = validators_1.pointSchema.validate(argsObj);
            if (error) {
                console.log(`${chalk_1.default.redBright(error.name)}: ${chalk_1.default.yellowBright(error.message)}`);
                return;
            }
            this.emit('find_point', value);
        });
        this.program
            .command('exit')
            .description('exit program')
            .action((...args) => {
            this.emit('exit');
        });
        this.program
            .command('find')
            .description(`search for intersecting shapes:`)
            .option('-p, --point <point...>', 'find shapes containing point: usage: find -p 2 3')
            .option('-s, --shape <shape...>', 'find shapes overlaping a given shape, usage: find -s "circle 2 3 4"')
            .action((options) => {
            console.log(options);
            if ((options.point !== undefined) && (options.point.length > 0)) {
                const argsObj = { x: options.point[0], y: options.point[1] };
                const { error, value } = validators_1.pointSchema.validate(argsObj);
                if (error) {
                    console.log(`${chalk_1.default.redBright(error.name)}: ${chalk_1.default.yellowBright(error.message)}`);
                    return;
                }
                this.emit('find_point', value);
            }
            if (options.shape !== undefined && (options.shape.length > 0)) {
                const cmd = options.shape.shift();
                const shape = [...options.shape];
                if (!validators_1.isValidShapeCmd(cmd)) {
                    console.error(`${cmd} is not a valid command`);
                }
                const { error, value } = validators_1.shapeValidatorFactory(cmd).validate(validators_1.buildShapeArgs(cmd, shape));
                if (error) {
                    console.log(`${chalk_1.default.redBright(error.name)}: ${chalk_1.default.yellowBright(error.message)}`);
                    return;
                }
                this.emit('find_shape', { name: cmd, args: value });
            }
            // reset the options ; options = {} does not work inside action handler
            Object.keys(options).forEach((e) => {
                delete options[e];
            });
        });
        this.program
            .command('load')
            .description('load a test file')
            .argument('<fp>', 'filepath')
            .action((fp) => {
            // validate arguments
            const { error } = validators_1.fpSchema.validate({ fp });
            if (error) {
                console.log(`${chalk_1.default.redBright(error.name)}: ${chalk_1.default.yellowBright(error.message)}`);
                return;
            }
            this.emit('file', { file: fp });
        });
    }
}
exports.default = new Parser();
