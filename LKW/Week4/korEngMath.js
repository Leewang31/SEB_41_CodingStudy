const input = require('fs').readFileSync('./dev/10825').toString().trim().split("\n");
input.shift()

const student = input.map((el) => el.split(' '))
student.sort((a, b) => {
    if (+a[1] !== +b[1]) {
        return +b[1] - +a[1]
    } else if (+a[2] !== +b[2]) {
        return +a[2] - +b[2]
    } else if (+a[3] !== +b[3]) {
        return +b[3] - +a[3]
    } else if (a[0] > b[0]) {
        return 1;
    } else {
        return -1;
    }
})
let result = []
student.forEach((el) => {
    result.push(el[0])
})
console.log(result.join('\n'))

/*let [n, ...scoreList] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

scoreList = scoreList.map((student) => {
  const [name, kor, eng, math] = student.split(" ");

  return {
    name: name,
    kor: +kor,
    eng: +eng,
    math: +math,
  };
});

const sortScore = (a, b) => {
  if (a.kor !== b.kor) return b.kor - a.kor; // 1. 국어 : 내림차순
  else if (a.eng !== b.eng) return a.eng - b.eng; // 2. 영어 : 오름차순
  else if (a.math !== b.math) return b.math - a.math; // 3. 수학 : 내림차순
  else return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; // 4. 이름 사전순 증가(오름차순)
};

const result = scoreList.sort(sortScore).map((student) => student.name);

console.log(result.join('\n'));*/