// 더하기 사이클

// 문자열 변환 후 비교보다 숫자 상태로 계산하는 게 더 빠르다.
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
// let num = input.toString();

// let count = 1;
// let cal = true;
// while (cal === true) {
// 	if (num.length < 2) {
// 		num = '0' + num;
// 	} else {
// 		num = num;
// 	}
// 	const newNum = num.toString().split('');
// 	const a = parseInt(newNum[0]);
// 	const b = parseInt(newNum[1]);

// 	const result = (a + b).toString();

// 	num = b + result.substr(result.length - 1, 1);
// 	if (parseInt(num) === parseInt(input)) {
// 		cal = false;
// 		break;
// 	}
// 	count++;
// }

// console.log(count);

const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString()); // string을 다시 int로
let number = input;
let count = 1;

while (true) {
	const a = Math.floor(number / 10);
	const b = number % 10;
	number = b * 10 + ((a + b) % 10);

	if (number === input) {
		break;
	}
	count++;
}
console.log(count);
