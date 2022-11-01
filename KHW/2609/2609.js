const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

input = input.map((el)=> +el)//.split(' ')

const a = input[0];
const b = input[1];

// 유클리드 호제법으로 최대공약수와 최소 공배수 구하기
function solution(a, b) {
  let greatest = (a, b) => a % b === 0 ? b : greatest(b, a % b);
  let least = (a, b) => a * b / greatest(a, b);

  console.log(greatest(a, b), least(a, b));
}
  
solution(a, b);