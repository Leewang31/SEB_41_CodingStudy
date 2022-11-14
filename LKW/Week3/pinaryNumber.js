// 2193
// let fs = require('fs');
// let input = Number(fs.readFileSync('./dev/stdin').toString());
/*
* 이친수 1 => 1
* 이친수 2 => 1
* 이친수 3 => 2
* 이친수 4 => 3
* 이친수 5 => 5
* ...
* 이친수 n => (n-1)+(n-2)
* */

// ! Number의 쵀대 초수값은 2^53 넘어가는 경우 BugInt 을 사용해야함, 풀력시 뒤에 n이 들어가기 때문에 String으로 타입 변경

let fs = require('fs');
let number = Number(fs.readFileSync('./dev/2193').toString());

let arrNum = new Array(number).fill(0)

arrNum[1] = 1
arrNum[2] = 1

for (let i = 3; i <= number; i++) {
    arrNum[i] = BigInt(arrNum[i - 2]) + BigInt(arrNum[i - 1])
}
console.log(String(arrNum[number]))