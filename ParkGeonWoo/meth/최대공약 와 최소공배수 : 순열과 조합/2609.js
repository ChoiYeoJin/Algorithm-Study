// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(' ');

const a = input[0];
const b = input[1];


function gcd(a,b) {
    let result = 0;
    while (true){
        if(a > b){
            a = a - b;
        } else if (a < b){
            b = b - a;
        }

        if (a === b){
            result = b;
            break;
        }
    }
    return result;
}


console.log(`${gcd(a, b)}\n${a * b /gcd(a, b)}`);

// 시간 초과
