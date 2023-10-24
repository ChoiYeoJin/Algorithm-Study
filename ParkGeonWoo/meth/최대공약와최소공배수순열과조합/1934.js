// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split('\n');

console.log(input);

const count = input[0];
const inputNum = input.slice(1);
console.log(inputNum);

function gcd(a,b) {
    while(b != 0){
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

inputNum.forEach(data => {
    const [a,b] = data.split(' ').map(Number);
    console.log(a,b);

    const lcm = (a * b)/gcd(a,b);
    console.log(lcm.toString());
});

// 시간 초과 뜸
