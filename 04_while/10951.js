// A+B - 5
// var input = '1 1\n2 3\n3 4\n9 8\n5 2\n'.toString().split('\n');
// input으로 받아오는 문자열 뒤에 줄바꿈이 존재하는 경우가 있다.
// filter함수를 이용하건 다른 방법을 쓰건 해당 부분 해결해야 정답 맞출 수 있음.

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const numArray = input.filter((item) => item !== '');

let i = 0;
while (i < numArray.length) {
	const num = numArray[i].split(' ');
	const a = parseInt(num[0]);
	const b = parseInt(num[1]);

	console.log(a + b);
	i++;
}
