const fs = require('fs');
const { type } = require('os');

let input = require('fs').readFileSync('ex.txt').toString().split('\n');
let numbers = input[1].split(' ').map((x) => Number(x));

console.log(Math.min(...numbers), Math.max(...numbers));