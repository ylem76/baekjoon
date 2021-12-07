var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var first = parseInt(input[0]);
var second = input[1].split('');

var a = parseInt(second[2]);
var b = parseInt(second[1]);
var c = parseInt(second[0]);

console.log(first * a);
console.log(first * b);
console.log(first * c);
console.log(first * a + first * b * 10 + first * c * 100);

// split 메서드 사용법 -> 배열반환
// parseInt 제때 사용하기 -> 문자열로 받아서 나눌 때와 숫자로 받을 때 구분하기
