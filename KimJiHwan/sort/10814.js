const fs = require("fs");
const inputData = fs.readFileSync(0, 'utf8').toString().trim().split("\n");

inputData.shift(); // 출력값을 제대로 도출하기 위한 N개의 줄을 나타내는 숫자 제거
inputData.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]); // 나이만 추출 후, 오름차순으로 정렬 
console.log(inputData.join("\n"));