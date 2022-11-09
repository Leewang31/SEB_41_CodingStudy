// 한 줄로 입력을 받을 때 (백준 제출용)
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const { findSourceMap } = require('module');

// 여러 줄로 입력을 받을 때 (백준 제출용)
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// vscode에서의 테스트용
let input = require('fs').readFileSync('9095/9095.txt').toString().split('\n');
console.log(input);
let testCase = Number(input[0]);
// console.log(testCase); //=>3

let arr = [0,1,2,4]; // n이 0,1,2,3일 때의 경우의 수
//i가 1부터인 이유: 0은 테스트케이스 숫자이기 때문.
for(let i=1; i<=testCase; i++){
    let num = input[i]
    for(let j=4; j<=num; j++){
        arr[j] = arr[j-1] + arr[j-2] + arr[j-3];
    }
    console.log(arr[num]);
}