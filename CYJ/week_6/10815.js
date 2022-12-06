let input = require("fs").readFileSync("week_6/10815.txt").toString().trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const cardList = input[1].split(" ").map((v) => Number(v));
const haveCard = input[3].split(" ").map((v) => Number(v));

let result = [];
cardList.sort((a, b) => a - b); //오름차순 정렬
haveCard.forEach((card) => {
  let min = 0;
  let max = cardList.length - 1;
  let res = false;
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
