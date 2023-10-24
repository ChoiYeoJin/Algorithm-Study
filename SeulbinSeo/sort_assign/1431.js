const fs = require("fs");
//const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(item => Number(item));
const input = fs.readFileSync(__dirname + '\\input.txt', 'utf8').trim().split('\n');

//A = 65

function compare(a, b) {
    const sumA = getNumberSum(a);
    const sumB = getNumberSum(b);

    if (sumA < sumB) {
        return -1;
    } else if (sumA > sumB) {
        return 1;
    } else {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    }
    
}

function getNumberSum(serialNumber) {
    // 시리얼 번호의 숫자를 모두 더한 값을 반환
    /*
    /: 정규 표현식의 시작과 끝을 나타내는 딜리미터입니다.
    \D: 이것은 숫자가 아닌 문자
    g: 이것은 정규 표현식의 플래그로, 모든 일치 항목을 찾아내기 위해 전역(global) 검색을 수행하는 것을 나타냅니다. 만약 g 플래그가 없으면 첫 번째 일치 항목만 찾게 됩니다.
    따라서 /D/g 패턴은 주어진 문자열에서 모든 숫자가 아닌(non-digit) 문자를 찾아내는 데 사용됩니다. 이 패턴을 사용하면 숫자가 아닌 문자를 모두 찾을 수 있습니다.*/
    return serialNumber.replace(/\D/g, '')  //serialNumber 문자열에서 모든 숫자가 아닌 문자를 제거
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0/**초기값 */);
    //reduce:배열에서 값들을 누적하는 데 사용되는 고차 함수
    //sum (현재 누적된 합계)와 digit (배열에서 현재 문자).
}

function sortSerialNumbers(serialNumbers) {
    return serialNumbers.sort(compare);
}

// 입력 시리얼 번호 배열
const serialNumbers = input; //배열 전개 연산가 -> ...사용

// 시리얼 번호 정렬
const sortedSerialNumbers = sortSerialNumbers(serialNumbers);

// 결과 출력
console.log(sortedSerialNumbers.join("\n"));

