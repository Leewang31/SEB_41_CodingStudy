const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');


const [n, k] = input.shift().split(' ').map((a)=> +a)
const lines = input.map((a)=> +a).sort();

let max = Math.max(...line);
let min = 1;

while (min <= max) {
    let mid = parseInt((max+ min) / 2);
    let pieces = lines
    .map((line)=> parseInt(line/mid))
    .reduce((a, b)=> a + b, 0)
    if (pieces >= k) {
        min = mid +1;
    }else {
        max = mid - 1;
    }
}
console.log(max)