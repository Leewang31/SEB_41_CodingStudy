//2751
const input = require('fs').readFileSync('./dev/2751').toString().trim().split("\n");
input.shift()
input.map((el) => Number(el));
input.sort((a, b) => a - b)
console.log(input.join('\n'))