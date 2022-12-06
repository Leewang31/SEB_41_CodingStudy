const input = require('fs').readFileSync('./dev/10815').toString().split("\n");
const card1 = input[1].trim().split(' ').map((v) => Number(v));
card1.sort((a, b) => a - b)
const card2 = input[3].trim().split(' ').map((v) => Number(v));

let resultArr = []

card2.forEach((el) => {
    let min = 0
    let max = card1.length - 1
    let btn = false;
    while (min <= max) {
        let mid = Math.floor((max + min) / 2)
        if(card1[mid]===el){
            btn = true
        }
        if (card1[mid] >= el) {
            max = mid - 1
        } else {
            min = mid + 1
        }
    }
    if(btn === true){
        resultArr.push(1)
    }else{
        resultArr.push(0)
    }
})

console.log(resultArr.join(' '))