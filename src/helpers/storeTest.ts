import Circle from "../shapes/circle";

let count: number = Number(process.argv[2]);
let shapeStore = new Map();
let currentId = 1;

function getId() {
    return currentId++;
}

function randCircle() {
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    let r = Math.floor(Math.random() * 100);
    return new Circle(getId(), x, y, r);
}

for (let index = 0; index < count; index++) {
    let circle = randCircle();
    shapeStore.set(circle.id, circle);
}

const used: any = process.memoryUsage();
for (let key in used) {
    console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}

function printShapes(x: number, y: number) {
    shapeStore.forEach((shape: Circle, key, map) => {
        if (shape.hasPoint(x, y)) {
            console.log(shape.toString());
        }
    })
}

console.time('search');
printShapes(3, 5);
console.timeEnd('search');