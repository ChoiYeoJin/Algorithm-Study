const fs = require("fs");
//const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(item => Number(item));
const input = fs.readFileSync(__dirname + '\\input.txt', 'utf8').trim().split('\n');

//A = 65



const input_ = (() => {
    let line = 0;
    return () => input[line++];
})();

let N = +input_();
let arr = [];

while (N--) arr.push(input_());

function compare(a, b) {
    let sum1 = sum(a);
    let sum2 = sum(b);
    
    if (sum1 < sum2) return -1;
    if (sum1 > sum2) return 1;
    
    return a.localeCompare(b);
    
}

function sum(serialNumber) {
    // 시리얼 번호의 숫자를 모두 더한 값을 반환
    /*
    /: 정규 표현식의 시작과 끝을 나타내는 딜리미터입니다.
    \D: 이것은 숫자가 아닌 문자
    g: 이것은 정규 표현식의 플래그로, 모든 일치 항목을 찾아내기 위해 전역(global) 검색을 수행하는 것을 나타냅니다. 만약 g 플래그가 없으면 첫 번째 일치 항목만 찾게 됩니다.
    따라서 /D/g 패턴은 주어진 문자열에서 모든 숫자가 아닌(non-digit) 문자를 찾아내는 데 사용됩니다. 이 패턴을 사용하면 숫자가 아닌 문자를 모두 찾을 수 있습니다.
    */

    // return serialNumber.replace(/\D/g, '')  //serialNumber 문자열에서 모든 숫자가 아닌 문자를 제거
    //     .split('')
    //     .reduce((sum, digit) => sum + parseInt(digit), 0/**초기값 */);

    const digits = serialNumber.match(/\d/g);
    
    if (digits) {
        return digits.reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    
    return 0; // Return 0 for serial numbers with no digits.

    //reduce:배열에서 값들을 누적하는 데 사용되는 고차 함수
    //sum (현재 누적된 합계)와 digit (배열에서 현재 문자).
}

function sortSerialNumbers(serialNumbers) {
    return serialNumbers.sort(compare);
}


const sortedSerialNumbers = sortSerialNumbers(arr);

console.log(sortedSerialNumbers.join("\n"));
