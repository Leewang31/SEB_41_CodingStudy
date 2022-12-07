const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input.shift());
const xy = input.filter((v, i) => i >= 0).map((v) => v.split(' '));

console.log(xy)// 인자 받아옴  배열 안 배열 형식으로
console.log(N) //몇개인지 필요엄슴


let answer = '';
xy.sort((a, b) => {
  if (a[0] === b[0]) // 앞칸이 같으면
    return a[1] - b[1]; //뒷칸 비교해서 오름차순
  else
    return a[0] - b[0]; //나머진 다 앞칸은 오름차순
})
  .forEach(arr => {
    answer += `${arr[0]} ${arr[1]}\n`
  });


console.log(answer);