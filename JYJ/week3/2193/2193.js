// 이친수
// N(1 ≤ N ≤ 90)이 주어졌을 때, N자리 이친수의 개수를 구하는 코드 작성

let fs = require("fs");
let input = Number(fs.readFileSync("2193.txt").toString());

const arr = new Array(input + 1);

arr[1] = 1;
arr[2] = 1;

for (let i = 3; i < arr.length; i++) {
  arr[i] = BigInt(arr[i - 2]) + BigInt(arr[i - 1]);
}
console.log(String(arr[input]));
