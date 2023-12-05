/*
1 2 3 4 5 6 7 8 9 10
  1   2 1 3 2
*/

const fs = require("fs");
let input = fs.readFileSync(__dirname + "\\input.txt").toString();
//let input = fs.readFileSync("/dev/stdin").toString().trim();

input = Number(input);

let dp = new Array(100001).fill(-1);

dp[2] = 1;
dp[4] = 2;
dp[5] = 1;

for (let i = 6; i < 100001; i++) {
  if (dp[i - 2] !== -1 && dp[i - 5] !== -1)
    dp[i] = Math.min(dp[i - 2], dp[i - 5]) + 1;
  else if (dp[i - 2] !== -1) {
    //console.log("here");
    dp[i] = dp[i - 2] + 1;
  } else if (dp[i - 5] !== -1) {
    dp[i] = dp[i - 5] + 1;
  }
}

console.log(dp);
