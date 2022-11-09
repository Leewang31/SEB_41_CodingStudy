let input = require(fs).readFileSync('/dev/stdin')

let count = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break; // 5로 나눈 값이 가장 적은 수의 카운트 일 것이기 때문에
  }
    
  if (0 > input) {
    console.log(-1);
    break; // 0보다 같거나 작으면 ㅂㅂ
  }

  count++;
  input -= 3; // 3으로 뺄 때마다 카운트가 올라감 
}