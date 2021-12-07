// n까지의 합

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
var num = parseInt(input);

// console.log(num * (num + 1) / 2);

var result = 0;

for (i = 1; i <= num; i++) {
    result = result + i;
}

console.log(result)