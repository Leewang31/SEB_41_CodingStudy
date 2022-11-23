// let arr = require('fs').readFileSync('week_4/2751.txt').toString().split('\n');

let arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let num = arr.map(el=>Number(el));

let sliceNum = num.slice(1)
//같은 숫자가 있을 시 2개가 다 나옴.
console.log(
    sliceNum
    .sort((a,b)=>a-b)
    .join("\n")  
    )