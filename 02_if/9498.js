// 시험 성적

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var num = parseInt(input[0]);

if (num > 89) {
    console.log('A');
} else if (num > 79) {
    console.log('B');
} else if (num > 69) {
    console.log('C');
} else if (num > 59) {
    console.log('D');
} else {
    console.log('F');
}
