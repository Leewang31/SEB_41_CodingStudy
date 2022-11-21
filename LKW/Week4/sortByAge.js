// 10814
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n"); -> 이렇게도 가능
let fs = require('fs');
let input = fs.readFileSync('./dev/10814').toString().trim().split('\n');
input.shift()
input.sort((a, b) => a.split(' ')[0] - b.split(' ')[0])
console.log(input.join('\n'))
