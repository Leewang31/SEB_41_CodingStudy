const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './1654.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input.shift().split(' ').map(el => Number(el));
input = input.map(el => Number(el)).sort();

let min = 1;
let max = Math.max(...input);

//
while (min <= max) {
  // mid: 자르는 길이
  let mid = parseInt((max + min) / 2);
  // mid로 잘랐을때 나오는 개수
  let howManyPieces = input
    .map((line) => parseInt(line / mid))
    .reduce((a, b) => a + b, 0);

    // 전선의 개수가 만들고자 하는 개수(k)보다 많다면 자르는 길이를 늘려줘야한다.
  if (howManyPieces >= k) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(max);