/*
두 자연수 A와 B가 있을 때, A = BC를 만족하는 자연수 C를 A의 약수라고 한다. 
예를 들어, 2의 약수는 1, 2가 있고, 24의 약수는 1, 2, 3, 4, 6, 8, 12, 24가 있다. 
자연수 A의 약수의 합은 A의 모든 약수를 더한 값이고, f(A)로 표현한다. 
x보다 작거나 같은 모든 자연수 y의 f(y)값을 더한 값은 g(x)로 표현한다.

자연수 N이 주어졌을 때, g(N)을 구해보자.

1~ x 까지 약수를 각각 구한 후 그 약수들을 각각 더한 후 그 것들을 
g(x) = f(1) + .... + f(x);
f(y) = y의 약수값들을 다 더한 값

f(1) ~ f(N) 값이 N마다 중복

dp에 g(x)를 넣고 
dp[i] = dp[i-1] + Sum(i)



*/

// const fs = require("fs");
// let input = fs.readFileSync(__dirname + "\\input.txt").toString();
// //let input = fs.readFileSync('/dev/stdin').toString().trim();

const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let f = new Array(1000001).fill(1);
let d = new Array(1000001);
f[0] = 0;
d[0] = 0;

for (let i = 2; i <= 1000000; i++) {
  for (let j = 1; i * j <= 1000000; j++) {
    f[i * j] += i;
  }
}

for (let i = 1; i <= 1000000; i++) {
  d[i] = d[i - 1] + f[i];
}

const N = input.shift();
const answer = [];
input.forEach((v) => {
  answer.push(d[v]);
});

console.log(answer.join("\n"));
