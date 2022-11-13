const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((el)=> +el)

// solution(input[0], input[1]);

// const m = input[0];
// const n = input[1];

// const prime = [];
// const check = new Array(n + 1).fill(false);

// for (let i = m; i <= n; i++) {
//   if (!check[i]) {
//     prime.push(i);
//     for (let j = i * 2; j <= n; j += i) {
//       if(){check[j] = true;
//     }else if(i%j === 0){
//       break;
//     }
//   }
// }
//   if (prime.length === 0) {
//     console.log(-1)
//   }else {

//     console.log(prime.filter((x) => x >= m).reduce((a,b)=>a+b));
//     console.log(prime.filter((x) => x >= m)[0])
// }
// console.log(prime)

// 풀리는데 안 넘어감


const m = input[0];
const n = input[1];
const prime = []; // 소수인 친구 모여라 
const check = new Array(n + 1).fill(false);// False인 애들만 들어올 수 있어 === 소수가 아닌 친구들 

for (let i = 2; i <= n; i++) { //전체 숫자를 비교 
  if (!check[i]) {
    prime.push(i);
    for (let j = i * 2; j <= n; j += i) {
      check[j] = true;
    }
  }
  (prime.length === 0) {
         console.log(-1)
     }
}
console.log(prime.filter((x) => x >= m).reduce((a,b)=>a+b));
console.log(prime.filter((x) => x >= m)[0])



//기완님 .ver


// let fs = require('fs');
// let input = fs.readFileSync('./dev/stdin').toString().split('\n');

// let firstNum = Number(input[0]); // -> 60
// let secondNum = Number(input[1]); // -> 100

// let primeArr = []

// for (let i = firstNum; i <= secondNum; i++) { // 첫번째, 두번째 숫자 사이 비교
//     for(let j = 2; j<=i;j++){ // 위에 i가 늘어날 때, j로 비교
//         if(i===j){ // i가 j로 나눠 떨어지지 않고, j 가 i 로 도달 했을 때 소수
//             primeArr.push(i) // 소수인 친구들을 빈 배열에 추가
//         }
        
//         else if(i%j ===0){ // i가 j로 나누어 떨어진다면 ㄴㄴ
//             break;
//         }
//     }
// }

// if(primeArr.length === 0 ){
//     console.log(-1)
// }else{
//     console.log(primeArr.reduce((a,b)=>a+b));
//     console.log(primeArr[0]);
// }

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((el)=> +el)

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
if(prime[prime.length-1]<m||prime.length===0){
    console.log(-1)
}else{
    console.log(prime.filter((x) => x >= m).reduce((a,b)=>a+b));
    console.log(prime.filter((x) => x >= m)[0])
}



//const input = ['64', '65'];
// const primeNumArr = [];
// let primeNumSum = 0;
 
// function primeNumber(n) {
//     if (n < 2) {
//         return;
//     }
 
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//         return;
//             }
//     }
// primeNumArr.push(n);
// primeNumSum += n;
// }
 
// const begin = parseInt(input.shift());
// const end = parseInt(input.shift());
 
//  for (let i = begin; i <= end; i++) {
//         primeNumber(i);
//     }
 
//     if (!primeNumArr.length) {
// console.log(-1);
// } else {
// console.log(primeNumSum);
// console.log(Math.min.apply(null, primeNumArr));
// }
// //풀리는데 안 넘어감 

// const M = input[0];
// const N = input[1];
// let primeArr = [];

// function isPrime(num) {
//   if (num === 1) return;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return;
//   }
//   return primeArr.push(num);
// }
// for (let i = M; i <= N; i++) {
//   isPrime(i);
// }

// if (primeArr.length === 0) console.log(-1);
// else {
//   console.log(primeArr.reduce((acc, el) => acc + el, 0));
//   console.log(Math.min(...primeArr));
// }
let a = 5


if (a === 5){ ///
    console.log(111)
}if(a === 5) {
    console.log(222)
}else if (a === 5) { 
    console.log(333)
}else if (a === 4) {
    console.log(444)
}if( a=== 5) {
    console.log(555)
}
수고하셨습니다 진짜루...감사해요
기완님짱
맞아요
그럼요
저는 좋습니다
