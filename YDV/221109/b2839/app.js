let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((el)=> +el)

let count = 0;

while (true) { // 현재 n 킬로 그램에서 3킬로를 빼주면서 조건을 비교
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break; // 5로 나눈 값이 가장 적은 수의 카운트 일 것이기 때문에
  }
    
  if (0 > input) {
    console.log(-1);
    break; // 음수는 ㅂㅂ
  }

  count++;
  input -= 3; // 3으로 뺄 때마다 카운트가 올라감 
}