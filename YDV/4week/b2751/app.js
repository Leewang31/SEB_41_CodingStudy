// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

// input = input.map((el)=> +el)


// arr = input.sort((a,b)=> a-b)// 오름차순으로 배열 만들기

// for(let i = 0 ; i < arr.length ; i++ ){ // 오름차순 배열에서 주어진 숫자 돌면서 비교
//     if (arr[i] === arr[i+1]) {
//         delete arr[i+1] /// 같은 수 지우기 
//     }
//     console.log(arr)
// }

// console.log(arr.join('\n'));


//=============출력초과....

const line = require("fs").readFileSync("input.txt", "utf8");

let [first, ...data] = line // 첫 숫자는 필요없으므로 firstLine으로 제외
  .trim()                   // ['5',  '\n', '5','\n', '4',  '\n','3',  '\n', '2','\n', '1']
//   .split("\n")              // 엔터 제거
//   .map(v => Number(v));     // 숫자로 변환해서 배열안에 넣음
  console.log([first, ...data]) // [ 5, 5, 4, 3, 2, 1 ]

const input = data.sort((a, b) => a - b); // data만 오름차순으로 정렬 

console.log(input.join("\n"));            // 엔터쳐서 귀찮게 출력...

// // //===================통과



// const input = require("fs").readFileSync("/dev/stdin", "utf8"); // (utf8 인코더) 인자를 받아오는 방법 달리 해보기

// let data =input.trim().split('\n');
// let numberArr = data.map((el)=> +el)
// let [firstLine, ...filteredData] = numberArr ;
// let result = filteredData.sort((a,b)=> a-b)// 오름차순으로 배열 만들기


// console.log(result.join('\n'));






//console.log(arr)
// for (let i = 0 ; i < arr.length ; i++){
//     if (arr[i] === arr[i+1]) {
//         delete arr[i+1]
//        //console.log(arr)
//     }
//     console.log(arr)
// }


