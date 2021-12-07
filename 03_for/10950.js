// A+B - 3

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (i = 1; i <= input[0]; i++) {
    var num = input[i].split(' ');
    var a = parseInt(num[0]);
    var b = parseInt(num[1]);

    console.log(a + b);
}

