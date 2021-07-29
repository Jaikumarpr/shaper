"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  simple id genarator
class IdGenerator {
    constructor() {
        this.currentId = 0;
    }
    *id() {
        yield this.currentId++;
    }
}
exports.default = new IdGenerator();
