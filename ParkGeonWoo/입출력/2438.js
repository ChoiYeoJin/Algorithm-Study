const fs = require('fs');
const { type } = require('os');
let input = require('fs').readFileSync('ex.txt').toString().split('\n');

let count = Number(input[0]);

for (let i = 0; count > i; i++) {
    console.log("*".repeat(i + 1));
}