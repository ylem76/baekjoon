// 구구단

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
var num = parseInt(input);

for (i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num*i}`)
}