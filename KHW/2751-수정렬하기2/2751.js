const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2751.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(el => Number(el))
let n = input.shift()

input.sort((a, b) => a - b);

console.log(input.join('\n'))