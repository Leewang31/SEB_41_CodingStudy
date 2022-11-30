const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2805.txt';
let [input, tree] = fs.readFileSync(filePath).toString().split('\n');
let [n, m] = input.split(' ').map(Number);
tree = tree.split(' ').map(Number).sort((a, b) => b - a);
// (a - b) * count
// 46 42 40 26 4   20  1
// 42 42 40 26 4   16  2
// 40 40 40 26 4   12  3
// (a - b) * count > m
// 따라서 m / count   count -1 인덱스까지
// let count = 0;

// for(let i = 0; i < tree.length; i++) {
//   count ++;

//   //m을 넘을때
//   if((tree[i] - tree[i + 1]) * count >= m) {
//     for(let j = 0; j < count; j++) {
//       tree[j] -= (m / count)
//     }
//     break;
//   } else{
//       m = m - ((tree[i] - tree[i + 1]) * count);
//       for(let k = 0; k < count; k++) {
//         tree[k] -= (tree[i] - tree[i + 1]);
//       }
//   }
// }
// console.log(tree[0])


function solution(m, tree) {
  // 이진 탐색
  // min과 max 사이의 크기로 절단기 높이 설정
  // 절단기 높이로 자른 총합이 m보다 크면 절단기 높이 값 늘림
  // 작다면 절단기 높이 줄임
  let max = tree[0];
  let mid = 0;
  let total = 0;
  let min = 0;
  let answer = 0
  while (min <= max) {
    total = 0;
    mid = Math.floor((max + min) / 2);
    tree.forEach((el) => {
      let cut = el - mid;
      if (cut > 0) total += cut;
    });

    if (total >= m) {
        if(mid > answer) {
          answer = mid
        }
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  console.log(answer);
}

solution(m, tree)