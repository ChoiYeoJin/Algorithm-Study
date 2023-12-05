/*
5
1+1+1+1+1
1+1+1+2
1+1+2+1
1+2+1+1
2+1+1+1
2+2+1
2+1+2
1+2+2
3+1+1


정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다. 합을 나타낼 때는 수를 1개 이상 사용해야 한다.

1+1+1+1
1+1+2
1+2+1
2+1+1
2+2
1+3
3+1

7개
정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.

3
1+1+1
1+2
2+1
3


2
1+1
2

1
1

초기값
dp[1] = 1
dp[2] = 2
dp[3] = 3

A(n)은,

- A(n-1), 즉 n-1을 만드는 모든 경우 각각에 대해 그 뒤에 1을 더하는 것과

- A(n-2), 즉 n-2를 만드는 모든 경우 각각에 대해 그 뒤에 2를 더하는 것과

- A(n-3), 즉 n-3을 만드는 모든 경우 각각에 대해 그 뒤에 3을 더하는 것

의 모든 경우의 수의 합이기 때문입니다.

*/

const fs = require("fs");
let input = fs.readFileSync(__dirname + "\\input.txt").toString();
//let input = fs.readFileSync('/dev/stdin').toString().trim();

let data = input.split("\r\n").map((item) => Number(item));

let dp = [];
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let j = 1; j <= data[0]; j++) {
  let el = data[j];
  for (let i = 4; i <= el; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  console.log(dp[el]);
}
