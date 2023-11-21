/*
이진수중 특별한 성질을 갖는 이친수!
1. 이친수는 0으로 시작하지 않는다.
2. 이친수에서는 1이 두 번 연속 나타나지 않는다. 즉, 11을 부분 문자열로 갖지 않는다.
ex) 1, 10, 100, 101, 1000, 1001 ...
N(1 <= N <= 90) 일때 N자리 이친수의 개수를 구하는 프로그램
*/

/*
계단이랑 비슷한 느낌일지도
i번째 자리의 수를 결정할 때 i-1번째 자리 수와 i-2번째 자리의 수가 영향을 준다.

아 그런데 자릿수일때 개수...
123더하기랑 비슷..?

n=1
1

n=2
1 0

n=3  -> 2개
1 0 0
1 0 1

n=4  -> 3개
1 0 0 0
1 0 0 1
1 0 1 0

n=5
1 0 0 0 0
1 0 0 0 1
1 0 0 1 0
1 0 1 0 0
1 0 1 0 1

일단 dp[i] = dp[i-2] + dp[i-1] 이 성립하기는 한다 여기까지 단계에선...

*/

const fs = require("fs");
let input = fs.readFileSync(__dirname + "\\input.txt").toString();
//let input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

let dp = new Array(90).fill(0);

dp[0] = 1;
dp[1] = 1;

for (let i = 2; i < dp.length; i++) {
  dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
}

console.log(BigInt(dp[n - 1]).toString());
