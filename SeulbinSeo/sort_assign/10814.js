const fs = require('fs');

// 파일을 동기적으로 읽어옴
//const input = fs.readFileSync(__dirname + '\\input.txt', 'utf8');
const input = fs.readFileSync('/dev/stdin', 'utf8');

// 파일 내용을 줄바꿈으로 분리
const lines = input.split('\n');

const itemCount = parseInt(lines[0]);

// 결과를 저장할 배열
const data = [];

// 데이터를 객체로 변환
for (let i = 1; i <= itemCount; i++) {
    const [age, name] = lines[i].split(' ');
    data.push({ age: parseInt(age), name });
}

// 나이에 따라 작은 순서로 정렬
data.sort((a, b) => a.age - b.age);

// 정렬된 결과를 출력
for (const item of data) {
    console.log(`${item.age} ${item.name}`);
}
