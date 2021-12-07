// 최소, 최대

// const input = '5\n20 10 35 30 7'.split('\n');
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const array = input[1].split(' ').map((item) => parseInt(item));

let min = array[0];
let max = array[0];

for (i = 1; i <= array.length; i++) {
	if (min > array[i]) {
		min = array[i];
	} else {
		max = array[i];
	}
}

console.log(`${min} ${max}`);

// const max = (prev, cur) => {
// 	if (prev > cur) {
// 		return prev;
// 	} else {
// 		return cur;
// 	}
// };

// const min = (prev, cur) => {
// 	if (prev < cur) {
// 		return prev;
// 	} else {
// 		return cur;
// 	}
// };
// console.log(array.reduce(min));
// console.log(array.reduce(max));
