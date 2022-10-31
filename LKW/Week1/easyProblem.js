//1292
// let fs = require('fs');
// let input = fs.readFileSync('./dev/stdin').toString().split(' ');
let fs = require('fs');
let input = fs.readFileSync('./dev/1292').toString().split(' ');

let startNum = Number(input[0])
let endNum = Number(input[1])

let isTrue = false

let num = 1;
let count = 1;

let result = 0;


for (let i = 1; i <= 1000; i++) {
    if (i === startNum) {
        isTrue = true;
    }
    if (isTrue) {
        result += num
    }
    if (i === endNum) {
        return console.log(result)
    }
    if (num === count) {
        num++;
        count = 1;
    } else {
        count++
    }
}