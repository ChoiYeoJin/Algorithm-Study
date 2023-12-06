const fs = require("fs");
const [n, ...words] = fs.readFileSync(__dirname + "\\input.txt").toString().trim().split("\n");

Array.from(new Set(words)) // Set함수를 이용하여 배열 words에서 중복된 값을 제거
    .sort((a, b) => a > b ? 1 : (a < b ? -1 : 0)) // 사전식 순서 정렬('a > b'이면 1을 반환 => a가 b보다 크다고 간주 => a와 b의 순서를 바꿈. 나머지 경우는 순서를 바꾸지 않음)
    .sort((a, b) => a.length - b.length) // 길이에 따른 정렬('a.length - b.length > 0'이면 a를 b보다 뒤로 보냄. 같으면 순서 변경하지 않고, 음수값이면 앞으로 보냄)
    .forEach(i => console.log(i)); // forEach를 이용하여 정렬된 결과를 출력