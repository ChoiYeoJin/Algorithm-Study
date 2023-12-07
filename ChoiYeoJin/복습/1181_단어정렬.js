const fs = require("fs");
let input = fs.readFileSync(__dirname + "\\input.txt").toString();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\r\n");
input.shift();

const checkDictionary = (str) => {};
//dsfsdfsdfg
let sorted = input.sort((a, b) => {
  if (a.length - b.length > 0) return 1;
  else if (a.length - b.length < 0) {
    return -1;
  } else {
    return a.localeCompare(b);
  }
});

let set = new Set(sorted);

set.forEach((el) => console.log(el));
