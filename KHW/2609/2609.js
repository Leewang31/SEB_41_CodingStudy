// 최대공약수 최소공배수 구하기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

input = input.map((el)=> +el)//.split(' ')

const a = input[0];
const b = input[1];

// 유클리드 호제법으로 최대 공약수와 최소 공배수 구하기

// 최대 공약수
// 두 수 중에서 큰 수를 작은 수로 나눈다.
// 만약 나누고 난 나머지가 0 이라면 작은 수가 최대공약수이다.
// 만약 나머지가 0 이 아니라면, 작은 수를 다시 나머지로 나눈다.
// 이를 반복해서 나머지가 0 이 될 때, 그때 나누는 수가 바로 두 수의 최대공약수이다.

// 최소 공배수
// 두 수의 최대 공약수와 최소 공배수의 곱은 두 수의 곱과 같다

function solution(a, b) {
  let greatest = (a, b) => a % b === 0 ? b : greatest(b, a % b);
  let least = (a, b) => a * b / greatest(a, b);

  console.log(greatest(a, b), least(a, b));
}

a > b ? solution(a, b) : solution(b, a);