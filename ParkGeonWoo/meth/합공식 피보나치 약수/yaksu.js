let result = [];

// 제곱근까지만 확인해서 시간 복잡도 줄이기
for (let i = 0; i <= Math.sqrt(inputnum); i++) {
    // 입력 값을 i로 나눴을때 나머지가 0이면 약수
    if (inputnum % i == 0){
        result.push(i);
        // 해당 약수를 가지고 입력받은 값을 나누게 될 경우 나오는 결과 값 역시 약수
        if (inputnum / i != i) result.push(inputnum / i);
    }
}

console.log(result.sort((a,b) => a - b));