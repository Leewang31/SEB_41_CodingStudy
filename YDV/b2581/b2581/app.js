const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((el)=> +el)

//solution(input[0], input[1]);


const m = input[0];
const n = input[1];
const prime = [];
const check = new Array(n + 1).fill(false);

for (let i = 2; i <= n; i++) {
  if (!check[i]) {
    prime.push(i);
    for (let j = i * 2; j <= n; j += i) {
      check[j] = true;
    }//if (prime.push(i))
  }
}
console.log(prime.filter((x) => x >= m).reduce((a,b)=>a+b));
console.log(prime.filter((x) => x >= m)[0])

//const input = ['64', '65'];
// const primeNumArr = [];
// let primeNumSum = 0;
 
// function primeNumber(n) {
// if (n < 2) {
// return;
// }
 
// for (let i = 2; i < n; i++) {
// if (n % i === 0) {
// return;
// }
// }
// primeNumArr.push(n);
// primeNumSum += n;
// }
 
// const begin = parseInt(input.shift());
// const end = parseInt(input.shift());
 
// for (let i = begin; i <= end; i++) {
// primeNumber(i);
// }
 
// if (!primeNumArr.length) {
// console.log(-1);
// } else {
// console.log(primeNumSum);
// console.log(Math.min.apply(null, primeNumArr));
// }
