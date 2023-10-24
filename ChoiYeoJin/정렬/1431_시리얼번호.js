const fs = require("fs");
const { basename } = require("path");
let input = fs
  .readFileSync(__dirname + "\\input.txt")
  .toString()
  .split("\r\n");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split("\r\n");

/*
A와 B의 길이가 다르면, 짧은 것이 먼저 온다.
만약 서로 길이가 같다면, A의 모든 자리수의 합과 B의 모든 자리수의 합을 비교해서 작은 합을 가지는 것이 먼저온다. (숫자인 것만 더한다)
만약 1,2번 둘 조건으로도 비교할 수 없으면, 사전순으로 비교한다. 숫자가 알파벳보다 사전순으로 작다.
*/
input = input.slice(1);

const sorted = input.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length; // 길이에 따른 정렬
  const sumA = getSum(a);
  const sumB = getSum(b);
  if (sumA !== sumB) return sumA - sumB; // 자리수 합에 따른 정렬
  return a.localeCompare(b);

  return 0;
});

console.log(sorted.join("\n"));

function getSum(str) {
  return str.split("").reduce((acc, curr) => {
    const currNum = Number(curr);
    if (!isNaN(currNum)) acc += currNum;
    return acc;
  }, 0);
}
