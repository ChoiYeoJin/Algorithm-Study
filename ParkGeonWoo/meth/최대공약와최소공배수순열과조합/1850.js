// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(' ');

let a = Number(input[0]); 
let b = Number(input[1]); 

function gcd(a, b) {
    while (b !== 0n) { // Big int 0인지 판별
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a; // 
}

const result = gcd(a, b);
console.log("1".repeat(result.toString())); 
