var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');
// var first = parseInt(input[0].split(' '));
// var second = parseInt(input[1].split(' '));
// let a = first[0];
// let b = first[1];
// console.log(a + b);
// a = second[0];
// b = second[1];
// console.log(a * b);
