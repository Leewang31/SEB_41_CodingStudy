const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './1463.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let x = Number(input[0])

const DP = new Array(x + 1).fill(0);
DP[0] = 0;

for(i = 2; i <= x; i++) {
  DP[i] = DP[i - 1] + 1;

  if (i % 2 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 2] + 1);
  }

  if (i % 3 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 3] + 1);	
  }
}
// console.log(DP)
console.log(DP[x]);
/*
1을 더하는건 최소 한가지 방법은 더 써야 되는거임
[i / 2] + 1은 4의 경우 2로 나눈 횟수 1번과 2를 1로 나누는데 필요한 횟수인 [2] 둘을 더해준횟수임
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 11개
2부터 9까지 반복
[2] = 1
[3] = 1
[4] = 2
[5] = 3
[6] = 2
[7] = 3
[8] = 3
[9] = 2
[10] = 3
*/