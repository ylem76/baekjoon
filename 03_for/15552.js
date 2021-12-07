// 빠른 A+B
// for문 안에 console.log를 찍지 말고
// result 변수 안에 정답 텍스트 추가 후 for문이 완전히 끝나고 난 뒤 1번 출력

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var result = '';
for (i = 1; i <= input[0]; i++) {
    var num = input[i].split(' ');
    var a = parseInt(num[0]);
    var b = parseInt(num[1]);

    result += a + b + '\n';
}

console.log(result);