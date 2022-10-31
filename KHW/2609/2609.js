const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

input = input.map((el)=> +el)//.split(' ')

const a = input[0];
const b = input[1];

// 최대공약수와 최소 공배수 구하기
function solution(a, b) {
  let greatest = 0;
  let least = 0;

  // 최대 공약수 구하기
  for(let i = 1; i <= (a > b ? b : a); i++) {
    if(a % i === 0 && b % i === 0) {
      greatest = i;
    }
  }

  // 최소 공배수 구하기
  for(let i = (a > b ? a : b); i <= a * b; i++) {
    if(i % a === 0 && i % b === 0) {
      least = i;
      break;
    }
  }
  console.log(greatest, least);
}

solution(a, b);