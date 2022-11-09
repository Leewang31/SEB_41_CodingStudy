let input = require("fs").readFileSync("/dev/stdin");

let count = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break;
  }
  // 만약, 정확하게 N킬로그램을 만들 수 없다면 -1을 출력한다.
  if (0 > input) {
    console.log(-1);
    break;
  }
  // 5로 나누어 떨어지지 않으면 카운트 증가, input에서 3씩 빼고 다시 5로 나누어주기
  count++;
  input -= 3;
}
