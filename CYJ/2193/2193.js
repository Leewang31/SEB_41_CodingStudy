// let fs = require('fs');
// let input = Number(fs.readFileSync('/dev/stdin').toString());


//문제: N자리의 이친수 개수를 구하라
//이친수란? 0과 1로 이루어졌으나 1로만 시작하고 1이 연속되어 나타나지 않는다.

//1. 피보나치 수열 이용!
//1자리수 => 1 (1개)
//2자리수 => 10 (1개)
//3자리수 => 100, 101 (2개)
//4자리수 => 1000, 1010, 1001 (3개)
//5자리수 => 10000, 10101, 10010, 10001, 10100 (5개)
//6자리수 => 100000, 100001,100010,100100,100101,101000,101010,101001 (8개)

//2. 자리수를 Array객체로 만들자
//3. 3자리수부터는 앞의 두 자리수의 합을 더한 것과 같다
//!BigInt는 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형(런타임에러 방지)
let input = require("fs").readFileSync("2193/2193.txt").toString();
let numInput = Number(input); //3

const memo = new Array(numInput +1);

memo[1] = 1;
memo[2] = 1;
if (numInput >= 1 && numInput <= 90) {
  for (let i = 3; i < memo.length; i++) {
    memo[i] = BigInt(memo[i - 1]) + BigInt(memo[i - 2]);
  }
}
console.log(String(memo[input]));

//! 24번째 줄에 +1을 안해주고 29번째 줄에 i <= memo.length로 바꾸면 메모리 초과가 뜨면서 통과x
// for문에서 같으면 마지막 부분을 검사하지 못하기때문.




