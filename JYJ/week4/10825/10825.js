// 국영수
// 학생 N명의 이름과 국어, 영어, 수학 점수가 주어지고, 다음의 조건으로 학생의 성적을 정렬하는 코드 작성
// 국어 점수 감소 -> 국어 점수 같다면, 영어 점수 증가 -> 국어 점수와 영어 점수 같다면, 수학 점수 감소 -> 모든 점수 같다면 이름이 사전 순으로 증가

let fs = require("fs");
let input = fs.readFileSync("10825.txt").toString().trim().split("\n");

let n = input.shift();
let students = input.map((el) => el.split(" "));
let studentsName = [];

students.sort((a, b) => {
  if (+a[1] !== +b[1]) {
    return +b[1] - +a[1];
  } else if (+a[2] !== +b[2]) {
    return +a[2] - +b[2];
  } else if (+a[3] !== +b[3]) {
    return +b[3] - +a[3];
  } else if (a[0] > b[0]) {
    return 1;
  } else {
    return -1;
  }
});
students.forEach((el) => studentsName.push(el[0]));

console.log(studentsName.join("\n"));
