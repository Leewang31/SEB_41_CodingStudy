const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2193.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let n = Number(input[0])
// 각자리에 올 수 있는 숫자 0 1중에 걔네를 배열에 넣어
let answer = new Array(n + 1).fill(0);
answer[1] = 1;
answer[2] = 1;

for(let i = 3; i <= n; i++) {
  answer[i] = BigInt(answer[i - 1]) + BigInt(answer[i - 2]);
}

console.log(String(answer[n]))