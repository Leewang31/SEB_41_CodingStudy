// 한 줄로 입력을 받을 때 (백준 제출용)
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// 여러 줄로 입력을 받을 때 (백준 제출용)
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// vscode에서의 테스트용
let input = require('fs').readFileSync('2775/2775.txt').toString().split('\n');
// console.log(input);

let cases = Number(input.shift()); //=> 2
// console.log(cases);

for (let i = 0; i <cases; i++) {
    //k=층 , n=호 구분
    const k = +input.shift();
    const n = +input.shift();
   
    // 각 층과 호의 인원수를 지정할 2차원 배열 선언
    const house = Array.from(Array(k + 1), () => Array(n).fill(0));
    console.log(house)
    // 0층 (0층의 i호에는 i명이 산다.)
    for (let i = 1; i <= n; i++) {
      house[0][i] = i;
    }
    // 1 ~ k층 (k층 n호에는 k-1층 n호 + k층 n-1호만큼 산다.)
    for (let i = 1; i <= k; i++) {
      for (let j = 1; j <= n; j++) {
        house[i][j] = house[i - 1][j] + house[i][j-1];
      }
    }
  
    // k층 n호의 인원수 출력
    console.log(house[k][n]);
  }
