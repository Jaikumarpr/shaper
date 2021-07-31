# Shaper - Cli

Nodejs Cli App to store and search geometric shapes and points, spatial indexing using R- Tree

## Get started

- cd to directory
- run command `npm install`
- run command `npm run build`
- run command `npm start`

## Shape Commands

### circle

`circle <x> <y> <r>`

- x - x coordinate of center of circle
- y - y coordinate of center of circle
- r - radius of circle
- example: circle 4 5 6

### rectangle

`rectangle <x> <y> <l> <w>`

- x - x coordinate of left bottom corner
- y - y coordinate of left bottom corner
- l - length of rectangle
- w - width of rectangle
- example: rectangle 4 5 6 7

### square

`square <x> <y> <l> `

- x - x coordinate of left bottom corner
- y - y coordinate of left bottom corner
- l - length of square
- example: square 4 5 6

### triangle

`triangle <x1> <y1> <x2> <y2> <x3> <y3> `

- x, y coordinates of all corners
- example: triangle 4 5 6 7 8 9

### donut

`donut <x> <y> <r>`

- x - x coordinate of center of circle
- y - y coordinate of center of circle
- ri - inner radius of donut
- ro - outer radius of donut
- example: donut 4 5 6 8

## Query commands

### 1. By point

`find -p <x> <y>`

- find all shapes containing the poiny x, y
- prints surface area of all containing shapes
- prints total surface area of all containg shapes
- example `find -p 3 4`

### 2. By shape

`find -s <shape>`

- find all shapes intersecting the shape
- prints
- example `find -s circle 4 5 6`

## Bulk Insert

insert shape from file
`load <filepath>`

- example load /users/downloads/testFile.txt

## Help

- type 'help' to see more information about commands
- type 'help command' to see command specific information
