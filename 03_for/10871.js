// X보다 작은 수
// 그냥... 배열함수를 써봤어...

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

const x = input[0].split(' ')[1];
const array = input[1].split(' ');
const filter = array.filter(num => parseInt(num) < x);
console.log(filter.join(' '))
