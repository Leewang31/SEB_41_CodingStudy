let fs = require('fs');
let input = Number(fs.readFileSync('./dev/stdin').toString())

console.log(input);

const memo = [0, 1, 2];
if (input > 2) {
    for (let i = 3; i <= input; i++) {
        memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
    }
}

console.log(memo[input]);