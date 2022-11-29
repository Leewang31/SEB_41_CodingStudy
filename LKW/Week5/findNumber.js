const input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n");

const numberObj = {};
const resultArr = []

input[1].trim().split(' ').forEach((el) => {
    if (!numberObj[el]) {
        numberObj[el] = 1;
    }
})
input[3].trim().split(' ').forEach((el) => {
    numberObj[el] ? resultArr.push(1) : resultArr.push(0);
})

console.log(resultArr.join('\n'))
