let input = require("fs").readFileSync("week_6/1654.txt").toString().trim().split("\n");

// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

//갖고있는 랜선의 개수(k) : 4 
//갖고있는 랜선의 길이 : 802, 743, 457, 539
//필요한 랜선의 개수(n): 11 

const [n, k] = input.shift().split(' ').map((v) => +v);
const lines = input.map((a) => +a).sort(); //sort는 기본적으로 오름차순 정렬
let max = Math.max(...lines);
let min = 1;

while (min <= max) {
let mid = parseInt((max + min) / 2);
let howManyPieces = lines
.map((line) => parseInt(line / mid)) //현재 값 (mid) 로 랜선들을 다 나누고,
.reduce((a, b) => a + b, 0); // 몇개의 랜선을 만들 수 있는지 더한다.
if (howManyPieces >= k) {
min = mid + 1;
} else {
max = mid - 1;
}
}
console.log(max);

