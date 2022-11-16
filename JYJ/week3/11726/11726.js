/* 2xn 타일링
2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 코드 작성*/

// 1 => 1
// 2 => 2
// 3 => 3
// 4 => 5
// ... (n-1) + (n-2)

let input = require("fs").readFileSync("11726.txt").toString().split("\n");

let arr = [0, 1, 2];
for (let i = 3; i <= input; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
}
console.log(arr[input]);
