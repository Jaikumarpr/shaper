"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
class Banner {
    constructor() {
        this.name = '';
        this.greeting = '';
        this.subheading = '';
    }
    show() {
        console.log(chalk_1.default.yellow(figlet_1.default.textSync(this.name, { horizontalLayout: 'full' })));
        console.log();
        console.log(this.greeting);
        console.log(`${this.subheading} \n`);
    }
}
exports.default = Banner;
