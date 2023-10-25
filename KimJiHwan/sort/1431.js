// const fs = require('fs');
// let inputData = fs.readFileSync(0, "utf8").toString().trim().split('\n');

// inputData.shift();

// inputData.sort((a, b) => {
//     if (a.length != b.length) return a.length - b.length;
//     let sum1 = sum(a),
//         sum2 = sum(b);
//     if (sum1 == sum2) return a.localeCompare(b);
//     return sum1 - sum2;
// });

// console.log(inputData.join('\n'));

// function sum(str){
//     return str.match(/[\d]/g)?.reduce((a, c) => a + +c,0) || 0;
// } // 옵셔널 체이닝 > 프로퍼티가 없는 객체나 빈 배열에 접근할 때 오류없이 안전하게 접근하기 위한 방식
// // match함수를 통해서 [\d]로 배열 중 숫자만 추려내는 것. 이 때, 뒤에 g를 붙이면서 찾고 멈추지 않고, 전부 다 찾도록 함

const fs = require("fs");
let inputData = fs.readFileSync(0, "utf8").toString().trim().split("\n");

function sum(str) {
    let result = 0;
    str = str.replace(/[^0-9]/g, ""); // 문자열에서 숫자를 제외한 문자 없앰
    str = str.split("").map((i) => parseInt(i)); // 숫자를 정수형으로 변환(숫자도 문자열에 포함되어있기 때문)
    for(let i of str){
        result += i;
    } // 각 숫자들을 더함
    return result;
}

inputData.shift();
inputData = inputData.sort((a, b) => {
    if(a.length > b.length){
        return 1;
    }
    else if(a.length < b.length){
        return -1;
    } // 문자열 길이에 따른 정렬
    else{
        if(sum(a) > sum(b)){
            return 1;
        }
        else if(sum(a) < sum(b)){
            return -1;
        } // 숫자 합에 따른 정렬
        else{
            if(a > b){
                return 1;
            }
            else{
                return -1;
            } // 사전 순에 따른 정렬
        }
    }
});

console.log(inputData.join("\n"));