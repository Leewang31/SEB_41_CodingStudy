let input = require("fs").readFileSync("week_6/10815.txt").toString().trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const cardList = input[1].split(" ").map((v) => Number(v));
const haveCard = input[3].split(" ").map((v) => Number(v));


let result = []; //결과값이 들어갈 빈 배열
cardList.sort((a, b) => a - b); //오름차순 정렬 [-10,2,3,6,10]
haveCard.forEach((card) => {
  let min = 0;
  let max = cardList.length - 1;
  let res = false; //숫자카드를 가지고있는지를 확인=> false라면 0, true면 1
  while (min <= max) {
    let mid = parseInt((min + max) / 2);
    if (card < cardList[mid]) {
      max = mid - 1;
    } else if (card > cardList[mid]) {
      min = mid + 1;
    } else {
      res = true;
      break;
    }
  }
  if (res === true) {
    result.push(1);
  } else {
    result.push(0);
  }
});
console.log(result.join(" "));
