"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const donut_1 = __importDefault(require("../shapes/donut"));
const rectangle_1 = require("../shapes/rectangle");
const square_1 = require("../shapes/square");
const triangle_1 = require("../shapes/triangle");
const circle_1 = __importDefault(require("../shapes/circle"));
const shape_1 = __importDefault(require("../shapes/shape"));
exports.default = (shape, id, ...args) => {
    if (shape === 'circle') {
        return new circle_1.default(id, ...args);
    }
    if (shape === 'square') {
        return new square_1.Square(id, ...args);
    }
    if (shape === 'rectangle') {
        return new rectangle_1.Rectangle(id, ...args);
    }
    if (shape === 'triangle') {
        return new triangle_1.Triangle(id, ...args);
    }
    if (shape === 'donut') {
        return new donut_1.default(id, ...args);
    }
    return new shape_1.default(5, 'null', 0, 0);
};
