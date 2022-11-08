// 1, 2, 3 더하기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './9095.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(el => Number(el));
// T와 숫자입력 나눠주기
const T = input.shift();
// console.log(T)
// console.log(input)

function solution(T, input) {
  
  let answerArr = [];
  
  // 1, 2, 3의 경우의 수는 아래와 같다
  // 1

  // 1 1
  // 2

  // 1 1 1
  // 1 2
  // 2 1
  // 3
  answerArr[0] = 1;
  answerArr[1] = 2;
  answerArr[2] = 4;
  
  // 1 1 1 1
  // 1 1 2
  // 1 2 1
  // 2 1 1
  // 2 2
  // 1 3
  // 3 1
  // n의 경우의 수는 n - 1, n -2, n -3의 경우의 수의 합과 같다.
  for(let i = 3; i < 11; i++) {
    answerArr.push(answerArr[i - 1] + answerArr[i - 2] + answerArr[i -3]);
  }

  for(let i = 0; i < T; i++) {
    console.log(answerArr[input[i] - 1]);
  }
}

solution(T, input);

  // 1

  // 1 1
  // 2

  // 1 1 1
  // 1 2
  // 2 1
  // 3

  // 1 3
  // 1 1 2
  // 2 2
  // 1 1 1 1  
  // 1 2 1
  // 2 1 1
  // 3 1

  // 1 3 1
  // 1 1 2 1
  // 2 2 1
  // 1 1 1 1 1
  // 1 2 1 1
  // 2 1 1 1
  // 3 1 1
  // 3 2
  // 2 1 2
  // 1 2 2
  // 1 1 1 2
  // 1 1 3
  // 2 3