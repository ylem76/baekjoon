// A+B - 5
// var input = '1 1\n2 3\n3 4\n9 8\n5 2\n0 0'.toString().split('\n')

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var result = '';

let isZero = false;
let i = 0;
while (isZero === false) {
    var num = input[i].split(' ');
    var a = parseInt(num[0]);
    var b = parseInt(num[1]);
    if (a + b === 0) {
        isZero = true
    } else {
        result += a + b + '\n';
        i++;
    }
}

console.log(result);

// 난 while이 싫더라
// for 문으로 풀이

// for (i = 0; i < input.length; i++) {
//     var num = input[i].split(' ');
//     var a = parseInt(num[0]);
//     var b = parseInt(num[1]);

//     if (a + b === 0) {
//         console.log(result);
//         return
//     }
//     result += a + b + '\n';
// }


