const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(el=>Number(el));

const cases = input[0]; //입력 값

const arr = [0, 1, 2, 4];

for(let i=1; i<=cases; i++){ // 입력 값 만큼 i를 +1
    const num = input[i]; // num 은 input[i] 만큼
    for(let j=4; j<=num; j++){ //j는 4부터  input[i] 만큼만 증가
        arr[j] = arr[j-1] + arr[j-2] + arr[j-3]; // 어떤 수에 1혹은 2혹은 3의 가지 수를  더한 값
    }
    console.log(arr[num]);
}




6
===
5+1 13개
4+2 7개
3+3 4개
2+1+3 2개
2+2+2 2개
2+3+1 2개
1+1+1+3 1개
1+