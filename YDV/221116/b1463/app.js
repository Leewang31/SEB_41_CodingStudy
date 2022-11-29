const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath).toString());

const findMinimumSolution = (number) => {
    if(number === 1) {
        return 0;
    } else {
        const candiArr = [];
        if (number % 2 === 0) {
            candiArr.push(1 + findMinimumSolution(number / 2))
        }
        if (number % 3 === 0) {
            candiArr.push(1 + findMinimumSolution(number / 3))
        }
       candiArr.push(1 + findMinimumSolution(number - 1));
      
       return Math.min(...candiArr);
    }
}

const result = findMinimumSolution(input); 
console.log(result);






// input = input.map((el)=> +el)
// const dp = new Array(input + 1).fill(0); // dp[i]의 값



// for (let i=2; i < dp.length ; i++) {
//     dp[i] = dp[i-1]+1; // 1을 뺀 경우의 최솟값
  
//     if (i %3 === 0) {
//       dp[i] = Math.min(dp[i], dp[i/3]+1) //3으로 나눌 경우 최솟값
//     }
  
//     if(i%2 ===0) {
//       dp[i] = Math.min(dp[i], dp[i/2]+1)//2로 나눈 경우 최솟값
//     }
//   }
  
  
//   console.log(dp[input]);




//=====================================================

// const filePath = process.platform === 'linux'? '/dev/stdin' : 'input.txt'; // 정답 풀이 2
// const x = require('fs').readFileSync(filePath).toString().trim().split('\n');


// const numSet = new Set();
// let count = 0;
// let queue = [+x];

// function dp(x) {
//     while(queue.length) {
//         const newQueue = [];
//         for(const num of queue) {
//             if(num === 1) {
//                 return count;
//             }
//             if(!(num % 3) && !numSet.has(num / 3)) {
//                 newQueue.push(num / 3);
//                 numSet.add(num / 3);
//             }
//             if(!(num % 2) && !numSet.has(num / 2)) {
//                 newQueue.push(num / 2);
//                 numSet.add(num / 2);
//             }
//             if(!numSet.has(num - 1)) {
//                 newQueue.push(num - 1);
//                 numSet.add(num / 2);
//             }
//         }
//         queue = newQueue;
//         count++;
//     }
// }

// console.log(dp(+x));