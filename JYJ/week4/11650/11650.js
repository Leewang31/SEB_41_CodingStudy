// 좌표 정렬하기
// 2차원 평면 위의 점 N개가 주어지고, 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 코드 작성

let fs = require("fs");
let input = fs.readFileSync("11650.txt").toString().trim().split("\n");

let n = input.shift();

// OR 연산자 사용
input.sort(
  (a, b) =>
    a.split(" ")[0] - b.split(" ")[0] || a.split(" ")[1] - b.split(" ")[1]
);

console.log(input.join("\n"));

// let n = input.shift();

// input.sort((a, b) => {
//   if (a.split(" ")[0] === b.split(" ")[0]) {
//     return a.split(" ")[1] - b.split(" ")[1];
//   } else {
//     return a.split(" ")[0] - b.split(" ")[0];
//   }
// });

// console.log(input.join("\n"));
