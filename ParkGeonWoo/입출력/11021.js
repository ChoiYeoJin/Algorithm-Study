const fs = require('fs');
// let input = fs.readFileSync(__dirname + '\\input.txt').toString();
let input = fs.readFileSync("ex.txt").toString().split(`\n`);

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
    console.log(input[i]);
    if (input[i] !== '') {
        numbers.push(input[i].split(' '));
    }
}

for (let i = 0; i < numbers.length; i++) {
    let num1 = Number(numbers[i][0]);
    let num2 = Number(numbers[i][1]);

    console.log(`Case #${i + 1}: ${num1 + num2}`);
}