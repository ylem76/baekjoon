// N 기찍
// input 형식이 숫자가 아닐 수도 있음. 타입 잘 맞추기

var fs = require('fs');
var input = parseInt(fs.readFileSync('/dev/stdin'));

var result = '';
for (let i = input; i >= 1; i--) {
    result += i + '\n';
}

console.log(result);