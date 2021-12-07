// A+B - 7

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var result = '';
for (i = 1; i <= input[0]; i++) {
    var num = input[i].split(' ');
    var a = parseInt(num[0]);
    var b = parseInt(num[1]);

    result += `Case #${i}: ${a} + ${b} = ${a+b}\n`
}

console.log(result);