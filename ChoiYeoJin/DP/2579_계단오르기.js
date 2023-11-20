/*


최댓값... 각 자리마다 나올수 있는 최댓값을 저장하면?

dp[1] = 10
dp[2] = dp[1] + 20
dp[3] = dp[1] + 15  (점프한 경우만 가능)   -> 1에서 큰수로 선택지
dp[4] = dp[2] + 25
dp[5] = dp[4] or dp[3]

초깃값 1, 2, 3층은 계산해야함

그런데 연속된 수가 아니라는 보장을 어떻게하지 이렇게 더하면?
4개중에 3개를 선택해야함
큰 수로만 그럼 제일 작은수를 탈락시키면 되긴 하겠군


dp[4] = data[2] + data[1]
*/
const fs = require("fs");
let input = fs.readFileSync(__dirname + "\\input.txt").toString();
//let input = fs.readFileSync('/dev/stdin').toString().trim();

let data = input.split("\r\n");
data.shift();
data = data.map((item) => +item);

let dp = new Array(8).fill(0);

/*
처음 그냥 푼 풀이
*/

dp[1] = data[0];
dp[2] = dp[1] + data[1]; //30
dp[3] = dp[1] + data[2]; //25

//4의 배수에서 두개 선택하면 되겠다
//4의 배수가 아니면 남은 것중에 큰거 선택하면 되겠지
//10 20 15 25 10 20
console.log(data[5]);
for (let i = 4; i < dp.length; i++) {
  if (i % 4 === 0) {
    if (dp[i - 2] < dp[i - 1]) {
      dp[i] = dp[i - 1] + data[i - 1];
      dp[i + 1] = dp[i] + data[i];
    } else {
      dp[i] = dp[i - 2] + data[i - 1];
    }
  } else if (i % 4 === 3) {
    dp[i] = dp[i - 3] + data[i - 1] + data[i - 2];
  } else if (i % 4 === 2) {
    dp[i] = dp[i - 2] + data[i - 1];
  } else if (i % 4 === 1) {
  }

  console.log(i, dp[i]);
}

console.log(dp[6]);

//------------------------------------------
function maxStairScore(stairs) {
  let n = stairs.length;
  if (n === 0) return 0;
  if (n === 1) return stairs[0];
  if (n === 2) return stairs[0] + stairs[1];

  let dp = new Array(n);
  dp[0] = stairs[0];
  dp[1] = stairs[0] + stairs[1];
  dp[2] = Math.max(stairs[0], stairs[1]) + stairs[2];

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3] + stairs[i - 1]) + stairs[i];
  }

  return dp[n - 1];
}

// 예시 사용
let stairs = [10, 20, 15, 25, 10];
