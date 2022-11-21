// 1로 만들기
// X가 3으로 나누어 떨어지면, 3으로 나눈다.
// X가 2로 나누어 떨어지면, 2로 나눈다.
// 1을 뺀다.
// 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하는 코드 작성

let fs = require("fs");
let input = Number(fs.readFileSync("1463.txt").toString());

const arr = new Array(input + 1).fill(0);
for (let i = 2; i <= input; i++) {
  arr[i] = arr[i - 1] + 1;

  if (i % 3 === 0) {
    arr[i] = Math.min(arr[i], arr[i / 3] + 1);
  }

  if (i % 2 === 0) {
    arr[i] = Math.min(arr[i], arr[i / 2] + 1);
  }
}
console.log(arr[input]);
