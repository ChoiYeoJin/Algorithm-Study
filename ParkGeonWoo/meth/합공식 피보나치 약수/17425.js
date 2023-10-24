// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split('\n');

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split('\n');

let count = Number(input[0]);
let inputNumList = input.slice(1);

inputNumList.forEach(data => {
    let num = Number(data);
    let result = 0;
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                result += j;
            }
        }
    }
    console.log(result);
})