// let [n, ...arr] = require("fs")
//   .readFileSync("week_4/10825.txt")
//   .toString()
//   .split("\n");

let [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const names = [];
let newArr = arr
  .map((students) =>
    students.split(" ").map((student) => Number(student) || student)
  ) //논리곱 조건문
  .sort((a, b) => {
    //국어 점수가 감소하는 순서로
    if (a[1] < b[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else {
      //국어 점수가 같으면 영어 점수가 증가하는 순서로
      if (a[2] > b[2]) return 1;
      else if (a[2] < b[2]) return -1;
      else {
        //국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로
        if (a[3] < b[3]) return 1;
        else if (a[3] > b[3]) return -1;
        else {
          //모든 점수가 같으면 이름이 사전 순으로 증가하는 순서로 (단, 아스키 코드에서 대문자는 소문자보다 작으므로 사전순으로 앞에 온다.)
          if (a[0] > b[0]) return 1;
          else if (a[0] < b[0]) return -1;
          else return 0;
        }
      }
    }
  });
newArr.forEach((students) => names.push(students[0]));
console.log(names.join("\n"));

// !이름만 출력하기 실패
// let names = [];
//     arr
//     .map((students) =>
//       students.split(" ").map((student) => Number(student) || student)
//     ) //논리곱 조건문
//     .sort((a, b) => {
//       //국어 점수가 감소하는 순서로
//       if (a[1] < b[1]) return 1;
//       else if (a[1] > b[1]) return -1;
//       else {
//         //국어 점수가 같으면 영어 점수가 증가하는 순서로
//         if (a[2] > b[2]) return 1;
//         else if (a[2] < b[2]) return -1;
//         else {
//           //국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로
//           if (a[3] < b[3]) return 1;
//           else if (a[3] > b[3]) return -1;
//           else {
//             //모든 점수가 같으면 이름이 사전 순으로 증가하는 순서로 (단, 아스키 코드에서 대문자는 소문자보다 작으므로 사전순으로 앞에 온다.)
//             if (a[0] > b[0]) return 1;
//             else if (a[0] < b[0]) return -1;
//             else return 0;
//           }
//         }
//       }
//     })
//     console.log(names.push(arr[0]).join("\n"))
