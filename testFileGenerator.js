/* eslint-disable no-plusplus */
const fs = require('fs');

function addCircles(count) {
  for (let index = 0; index < count; index++) {
    const x = Math.floor(Math.random() * 20);
    const y = Math.floor(Math.random() * 20);
    const r = Math.floor(Math.random() * 20) + 1;
    const circleCmd = `circle ${x} ${y} ${r}\n`;
    fs.appendFileSync('testFile.txt', circleCmd);
  }
}

function addSquares(count) {
  for (let index = 0; index < count; index++) {
    const x = Math.floor(Math.random() * 25);
    const y = Math.floor(Math.random() * 25);
    const l = Math.floor(Math.random() * 25) + 1;
    const squareCmd = `square ${x} ${y} ${l}\n`;
    fs.appendFileSync('testFile.txt', squareCmd);
  }
}

function addRectangles(count) {
  for (let index = 0; index < count; index++) {
    const x = Math.floor(Math.random() * 25);
    const y = Math.floor(Math.random() * 25);
    const l = Math.floor(Math.random() * 25) + 1;
    const w = Math.floor(Math.random() * 25) + 1;
    const squareCmd = `rectangle ${x} ${y} ${l} ${w}\n`;
    fs.appendFileSync('testFile.txt', squareCmd);
  }
}

function addTriangles(count) {
  for (let index = 0; index < count; index++) {
    const x1 = Math.floor(Math.random() * 15);
    const y1 = Math.floor(Math.random() * 15);
    const x2 = Math.floor(Math.random() * 15);
    const y2 = Math.floor(Math.random() * 15);
    const x3 = Math.floor(Math.random() * 15);
    const y3 = Math.floor(Math.random() * 15);

    const squareCmd = `triangle ${x1} ${y1} ${x2} ${y2} ${x3} ${y3}\n`;
    fs.appendFileSync('testFile.txt', squareCmd);
  }
}

function addDonut(count) {
  for (let index = 0; index < count; index++) {
    const x = Math.floor(Math.random() * 20);
    const y = Math.floor(Math.random() * 20);
    const ri = Math.floor(Math.random() * 20) + 1;
    const ro = Math.floor(Math.random() * 20) + 1;
    const circleCmd = `donut ${x} ${y} ${ri} ${ro}\n`;
    fs.appendFileSync('testFile.txt', circleCmd);
  }
}

addCircles(500);
addSquares(500);
addRectangles(500);
addTriangles(500);
addDonut(500);
