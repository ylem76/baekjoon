// 사분면 고르기
// 런타임 오류가 날 때에는 fs모듈이 아닌 readline사용하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function(line) {
    input.push(parseInt(line));
}).on("close", function() {
    var x = Number(input[0])
    var y = Number(input[1])
    var result = 0;
    if (x > 0 && y > 0) {
        result = 1;
    } else if (x < 0 && y > 0) {
        result = 2;
    } else if (x < 0 && y < 0) {
        result = 3;
    } else {
        result = 4;
    }

    console.log(result);
});