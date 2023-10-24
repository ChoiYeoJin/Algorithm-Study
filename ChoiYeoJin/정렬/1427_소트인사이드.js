const fs = require("fs");
const { basename } = require("path");
let input = fs.readFileSync(__dirname + "\\input.txt").toString();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("").map((item) => +item);

input.sort((a, b) => b - a);
console.log(input.join(""));
