// const fs = require('fs');
// const input = fs.readFileSync(__dirname + '\\input.txt', 'utf8').trim().split('\n');

// // Convert input strings to integers
// const numbers = input.map(Number);

// numbers.sort((a, b) => a - b);

// console.log(numbers.join("\n"));

const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(item => Number(item));

const iter = input.shift();

input.sort((a,b) => a - b);

console.log(input.join("\n"));