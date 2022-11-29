// 수 정렬하기2
// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 코드 작성

let fs = require("fs");
let input = fs.readFileSync("2751.txt").toString().trim().split("\n");

let n = input.shift();

input.sort((a, b) => a - b);

console.log(input.join("\n"));
