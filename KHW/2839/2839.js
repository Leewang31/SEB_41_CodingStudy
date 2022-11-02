const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2839.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

input = Number(input);

// input이 0이 될때까지 빼기
// 5로 먼저 빼다가 나머지가 10보다 작고 9나 6이나 3이면 3으로 빼주기
let count = 0;
while(input > 0) {
  if(input < 15 && input % 3 === 0) {
    input -= 3;
    count ++;
  } else {
    input -= 5;
    count ++;
  }
}
if(input < 0) {
  console.log(-1);
} else{
  console.log(count);
}