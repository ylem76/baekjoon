// 알람시계

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
let h = parseInt(input[0])
let m = parseInt(input[1])

if (m >= 45) {
    m = m - 45;
} else {
    if (h === 0) {
        h = 24-1;
    }
    else {
        h = h - 1;
    }
    m = 60 - (45 - m);
}

console.log(h, m)