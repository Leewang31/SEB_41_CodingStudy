// let input = require('fs').readFileSync('11726/11726.txt').toString().split('\n');
// console.log(input)

let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString());

const memo = [0, 1, 2];
if (input > 2) {
  for (let i = 3; i <= input; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
  }
}

console.log(memo[input]);



