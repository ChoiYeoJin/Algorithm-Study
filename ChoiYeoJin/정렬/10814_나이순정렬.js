const fs = require("fs");
const { basename } = require("path");
let input = fs.readFileSync(__dirname + "\\input.txt").toString();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\r\n");
input = input.slice(1, input.length);

const members = input
  .map((item) => {
    const [age, name] = item.split(" ");
    return {
      age: Number(age),
      name: name,
    };
  })
  .sort((a, b) => {
    if (a.age !== b.age) return a.age - b.age; // 나이를 기준으로 오름차순 정렬
    // 나이가 같은 경우, 원래 배열의 순서를 유지 (안정 정렬)
  });

const result = members
  .map((member) => `${member.age} ${member.name}`)
  .join("\n");
console.log(result);
