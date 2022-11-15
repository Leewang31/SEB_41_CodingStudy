const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './11726.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let n = Number(input[0])
//2와 1의 합으로 n 나타내기
/*
[1] 1
[2] 2
[3] 3
[4] 5
[5] 8

*/
let answer = new Array(n + 1).fill(0);
answer[1] = 1;
answer[2] = 2;

for(let i = 3; i <= n; i++) {
  answer[i] = (answer[i - 1] + answer[i - 2]) % 10007;
}

console.log(answer[n]);