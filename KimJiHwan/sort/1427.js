const fs = require('fs');
/* 입력 데이터를 문자열로 변환 후, trim()을 이용하여 문자열 좌우 공백 제거하고, split("")을 이용하여 나눈 후 배열로 넣어주고, 
map()함수를 이용하여 문자열 타입을 number타입으로 변환 */
const inputData = fs.readFilesync(0, 'utf8').toString().trim().split("").map((item) => Number(item));

inputData.sort((a, b) => b - a); // sort()를 사용하여 inputData 배열을 내림차순으로 정렬

console.log(inputData.join("")); // join("")을 사용하여 배열 원소를 공백없이 한번에 출력