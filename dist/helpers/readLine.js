"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rl = void 0;
const readline_1 = __importDefault(require("readline"));
exports.rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
});
exports.rl.on('SIGINT', () => {
    exports.rl.question('Are you sure you want to exit? ', (answer) => {
        if (answer.match(/^y(es)?$/i))
            exports.rl.close();
    });
});
exports.rl.on('close', () => {
    console.log('program exited');
    process.exit(0);
});
exports.default = (cb) => {
    exports.rl.prompt();
    exports.rl.on('line', (input) => {
        cb(input.trim());
        exports.rl.prompt();
    });
};
