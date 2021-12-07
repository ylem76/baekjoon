// 최소, 최대
// 형변환을 잘 하자 ㅠㅠ

// const input = '99\n3\n29\n38\n12\n57\n74\n895\n40\n85\n61\n'.split('\n');
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const array = input.filter((item) => item !== '').map((item) => parseInt(item));

let index = 0;
const max = (prev, cur, idx) => {
	if (prev < cur) {
		index = idx;
		return cur;
	} else {
		return prev;
	}
};

console.log(array.reduce(max));
console.log(index + 1);
