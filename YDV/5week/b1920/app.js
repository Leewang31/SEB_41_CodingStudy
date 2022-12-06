// const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

// const line1 = input[1].split(' ').map(Number);
// const line2 = input[3].split(' ').map(Number);

// console.log(line2)

// for (let i =1 ; )


const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const [N, A, M, B] = input.map(v => v.split(" "));

const array = new Set(A);
console.log(array)
const result = B.map(v => array.has(v) ? 1 : 0);  // A랑 B랑 비교해서 3항 연산(가지고 있으면 1, 아니면 0 도출) 

console.log(result.join("\n")); //띄어쓰기로 출력