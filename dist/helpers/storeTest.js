"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = __importDefault(require("../shapes/circle"));
let count = Number(process.argv[2]);
let shapeStore = new Map();
let currentId = 1;
function getId() {
    return currentId++;
}
function randCircle() {
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    let r = Math.floor(Math.random() * 100);
    return new circle_1.default(getId(), x, y, r);
}
for (let index = 0; index < count; index++) {
    let circle = randCircle();
    shapeStore.set(circle.id, circle);
}
const used = process.memoryUsage();
for (let key in used) {
    console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}
function printShapes(x, y) {
    shapeStore.forEach((shape, key, map) => {
        if (shape.hasPoint(x, y)) {
            console.log(shape.toString());
        }
    });
}
console.time('search');
printShapes(3, 5);
console.timeEnd('search');
