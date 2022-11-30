// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './10814.txt';
// let input = fs.readFileSync(filePath).toString().split('\n')
// const T = input.shift();
// ['20 dhfkjd', '21 ksjdhfkj', '21 ldsfhkjs']
// input.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);

// console.log(input.join('\n'));

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const len = input.shift();

input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

console.log(input.join("\n"));

// 숫자로 먼저 정렬하고 숫자가 같으면 순서대로 정렬
// split 으로 숫자랑 문자 분리해주기
// let data = [];

// // 숫자로 분리하는 반복문
// for(let i = 0; i < input.length; i++) {
//   data.push(input[i].split(' '));
//   data[i][0] = Number(data[i][0]);
// }

// // 숫자 크기로 정렬하는 반복문
// data.sort((a, b) => a[0] - b[0]);

// // 출력
// let answer = ''
// for(let i = 0; i < data.length; i++) {
//   answer += `${data[i][0]} ${data[i][1]}\n`;
// }
// console.log(answer.slice(0, -2))
