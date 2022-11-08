// // 부녀회장이 될테야
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2775.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(el => Number(el));
const T = input.shift();
let array = []

// 1층 1호 = 0 층 1호
// 1층 2호 = 0층 1호 + 0층 2호 (1 ~ 2) = 3
// 1층 3호 = 0층 1호 + 0층 2호 + 0층 3호 = 6 (1 ~ 3)

// 2층 1호 = 1층 1호 = 1
// 2층 2호 = 1층 1호 + 1층 2호 = 4
// 2층 3호 = 1층 1호 + 1층 2호(1 + 1 ~ 2) + 1층 3호(1 + 1 ~2 + 1~3) = 10


// for(let i = 0; i < T; i++) {
//   let floor = input.shift();
//   let door = input.shift();
//   let house = []
//   // 0층 door호 까지 각 방의 인원수
  
//   for(let i = 0; i < door; i ++) {
//     house.push([1]);
//     for(let j = 1; j < door; j++) {
//       if(i === 0) {
//         house[i].push(j + 1);
//       } else {
//         house[i].push(house[i][j - 1] + house[i - 1][j]);
//       }
//     }
//   }

//   console.log(house[floor][door - 1])
// }
for(let i = 0; i < T * 2; i += 2){
  let k = Number(input[i]);
  let n = Number(input[i+1]);
  array.push([k,n]);
}
let floor = [];
let sum = 0;
for(let i = 0; i < array.length; i++){
    //k층 n호
    k = array[i][0];
    n = array[i][1];
    for(let j = 0; j <= k; j++){ //0층부터 k층까지
        floor[j] = [];
        for(let m = 1; m <= n; m++){ // 1호부터 n호까지
            if(j === 0){ //0층이라면
                floor[j].push(m);
            }else{ // j가 0이 아닐 때 
                sum += floor[j-1][m-1];
                floor[j].push(sum);
                if(m === n){
                    sum = 0;
                }
            }
        }
    }
    console.log(floor[k][n-1]);
}
// 평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.

// 이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 
// 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 는 계약 조항을 꼭 지키고 들어와야 한다.

// 아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때,
// 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라. 
// 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다
