// 한 줄로 입력을 받을 때 (백준 제출용)
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// 여러 줄로 입력을 받을 때 (백준 제출용)
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// vscode에서의 테스트용
let input = require('fs').readFileSync('1978/1978.txt').toString().split('\n');
// console.log(input);
// let cases = Number(input[0]);
// console.log(cases);
let splitInput = input[1].split(' ').map(el=>Number(el)) //=> [1,3,5,7]
console.log(splitInput);

// 접근방법
//1. splitInput에 반복문을 걸어 각각의 요소에 접근해준다
//2. 각각의 요소를 1과 자기 자신을 제외한 수로 나누어 준다 * 이때 나누어 떨어지지 않는다면 소수일 것!
//3. 소수인 요소가 들어오면 output이 하나씩 증가하도록 한다
//4. 반복문이 모두 끝난 뒤 output 출력


// output: 소수인 값들을 카운트
let output = 0;
//count: 소수가 아닌 값들을 카운트
let count = 0;

//소수: 1보다 큰 자연수 중, 1과 자기 자신만을 약수로 가지는 수
for (let i = 0; i < splitInput.length; i++) {
  if (splitInput[i] === 1) {
    continue;
  } else {
    for (let j = 2; j < splitInput[i]; j++) {
        // 1과 자기 자신을 제외한 수로 나누었을 때, 나누어진다면 소수가 아닌 값
        // 소수가 아니라면 count가 증가되도록 한다
      if (splitInput[i] % j === 0) {
        count++;
      }
    }
    // 27번째 줄에서 나누어지지 않아 count가 0을 유지한다는 것은 i에 소수가 들어왔다는 의미
    // 소수라면 output이 증가되도록 한다
    if (count === 0) {
      output++;
    }
  }
}
console.log(output);



//!실패한 방법
// 2와 3으로 나누어 떨어지지 않는다면 소수라고 접근
// for (let i = 0; i < splitInput.length; i++) {
//   if (splitInput[i] === 1) {
//     continue;
//   } else {
//     if (splitInput[i] % 2 === 0 || splitInput[i] % 3 === 0) {
//       count++;
//     } else{
//       output++
//     }
//   }
// }
// console.log(output);



