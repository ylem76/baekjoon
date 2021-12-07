// N 찍기

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin');

var result = '';
for (i = 1; i <= input; i++) {
    result += i + '\n';
}

console.log(result);