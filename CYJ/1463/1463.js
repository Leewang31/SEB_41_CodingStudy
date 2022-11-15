let input = require('fs').readFileSync('1463/1463.txt').toString().split('\n');


// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = input.map(el=>Number(el))


const DP = new Array(num + 1).fill(0);

for (let i = 2; i <= num; i++) {
    //1을 뺀 경우의 최솟값
    DP[i] = DP[i - 1] + 1;

    if (i % 2 === 0) {
        //2로 나누었을 경우의 최솟값
      DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }

    if (i % 3 === 0) {
        //3으로 나누었을 경우의 최솟값
      DP[i] = Math.min(DP[i], DP[i / 3] + 1);	
    }
}

console.log(DP[num]);