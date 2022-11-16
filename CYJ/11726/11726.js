let input = require('fs').readFileSync('11726/11726.txt').toString().split('\n');
console.log(input)

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input.map(el=>Number(el)) 
console.log(count);

const memo = [0, 1, 2];
if (count > 2) {
  for (let i = 3; i <= count; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
  }
}

console.log(memo[count]);