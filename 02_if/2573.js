// 윤년

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin');
var year = parseInt(input);
var result = 0;

if (year % 4 === 0) {
    if (year % 400 === 0 || year % 100 !== 0 ) {
        result = 1;
    }
}

console.log(result)
