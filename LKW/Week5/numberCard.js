const input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n");

const cardObj = {};
const resultArr = []

input[1].trim().split(' ').forEach((el)=>{cardObj[el]?cardObj[el] += 1:cardObj[el] = 1;})
input[3].trim().split(' ').forEach((el)=>{cardObj[el]?resultArr.push(cardObj[el]):resultArr.push(0);})

console.log(resultArr.join(' '))
