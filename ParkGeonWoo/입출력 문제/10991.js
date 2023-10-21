const fs = require('fs');
const { type } = require('os');

let input = require('fs').readFileSync('ex.txt').toString().split('\n');


let count = Number(input);

let result = "";

for (let i = 0; count > i; i++) {
    result += " ".repeat(count - (i + 1));
    result += "* ".repeat(i + 1);
    result += "\n";
}

console.log(result);