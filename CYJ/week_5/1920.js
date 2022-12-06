let input = require('fs').readFileSync('week_5/1920.txt').toString().trim().split('\n');
// console.log(input);

// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const A = input[1].split(' ').map(v=>Number(v)); // 탐색 대상
const B = input[3].split(' ').map(v=>Number(v));

let result = []; // 결과 값을 담을 빈 배열

A.sort((a,b) => a - b); // 오름차순 정렬
B.forEach(num => {
    let start = 0; // 탐색대상의 처음
    let end = A.length - 1;  // 탐색대상의 끝
    let res = false; //값의 존재유무 판별
    while (start <= end) {
        let mid = parseInt((start + end) / 2); // 탐색대상의 시작과 끝의 중간값
    
        if (num < A[mid]) { // B배열의 요소가 탐색 대상의 중간값보다 작으면 중간값에 -1을 해서 탐색범위를 줄임 //1,2,3,4,5
            end = mid - 1; 
        } else if (num > A[mid]) { // 반대로 크면, 중간값 + 1해서 탐색 범위를 줄여줌
            start = mid + 1;
        } else {
            res = true;
            break;
        }
    }
    if (res === true) {
        result.push(1);
    } else {
        result.push(0);
    }
})
console.log(result.join('\n'));