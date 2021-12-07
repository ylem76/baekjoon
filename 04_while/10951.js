// A+B - 5
var input = '1 1\n2 3\n3 4\n9 8\n5 2'.toString().split('\n')

var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var result = '';

let i = 0;
while (i < input.length) {
    var num = input[i].split(' ');
    var a = parseInt(num[0]);
    var b = parseInt(num[1]);
    result += a + b + '\n';
    i++;
}

console.log(result);


