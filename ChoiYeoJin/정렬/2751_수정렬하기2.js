const fs = require("fs");
const { basename } = require("path");
let input = fs
  .readFileSync(__dirname + "\\input.txt")
  .toString()
  .split("\r\n");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split("\r\n");

input = input.slice(1);

input.sort((a, b) => a - b);
console.log(input.join("\n"));
