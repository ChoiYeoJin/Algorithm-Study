const fs = require("fs");
let input = fs.readFileSync(__dirname + "\\input.txt").toString();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split(" ").map((item) => BigInt(item));

const [a, b] = [input[1], input[0]];

function gcd(a, b) {
  while (b !== BigInt(0)) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

console.log("1".repeat(Number(gcd(a, b))));
