// 별 찍기 - 2

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
var num = parseInt(input);

var result = '';

for (i = 1; i <= num; i++) {
    for (k = 1; k <= num - i; k++) {
        result += ' '
    }
    for (j = 1; j <= i; j++) {
        result += '*'
    }
    if (i != num) { result += '\n'}
}

console.log(result);