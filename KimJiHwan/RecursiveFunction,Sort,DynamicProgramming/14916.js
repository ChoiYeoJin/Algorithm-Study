const input = require("fs").readFileSync(__dirname + "\\input.txt").toString().trim().split("\n");

const n = parseInt(input);

function solution(n) {
	
    let counter = 0;

	if (n === 1 || n === 3) return -1; // 1원이나 3원은 거슬러줄 수 없기 때문에 -1 반환

	while (n > 0) {
		if (n % 5 === 0) {
			counter += Math.floor(n / 5); // 카운터
			break;
		} else {
			counter += 1; // 카운터
			n -= 2;
		} // 5로 나누어 떨어지는지 확인 => 그 후, 2로 나누어 떨어지는지 확인
	} // 결과값이 0일때까지 조건을 이행해야 하기 때문

	console.log(counter);
}

solution(n);
