const fs = require('fs');
let inputData = fs.readFileSync(0, "utf8").toString().trim().split('\n');

inputData.shift();

inputData.sort((a, b) => {
    if (a.length != b.length) return a.length - b.length;
    let sum1 = sum(a),
        sum2 = sum(b);
    if (sum1 == sum2) return a.localeCompare(b);
    return sum1 - sum2;
});

console.log(inputData.join('\n'));

function sum(str){
    return str.match(/[\d]/g)?.reduce((a, c) => a + +c,0) || 0;
} // 옵셔널 체이닝 > 프로퍼티가 없는 객체나 빈 배열에 접근할 때 오류없이 안전하게 접근하기 위한 방식
// 