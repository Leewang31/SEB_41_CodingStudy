//9095 1,2,3더하기
// let fs = require('fs');
// let input = fs.readFileSync('./dev/stdin').toString().split(' ');
let fs = require('fs');
let input = fs.readFileSync('./dev/9095').toString().split('\n');

/**
 * 0 -> 1
 * 1 -> 1
 * 2 -> 2, 1+1
 * 3 -> 3, 2+1, 1+2 , 1+1+1 => 2배열에 1더하고, 1배열에 2더하고, 0배열에 3더하고 === 4
 * 4 -> 4, [3]+1, [2]+2, [1]+3
 * 5 -> 5, [4]+1, [3]+2, [2]+3
 * */

input = input.map((el) => Number(el));

let resultArr = [1, 1, 2, 4];

const oneTwoThreeSumFunc = (n) => {
    if (resultArr[n] === undefined) {
        resultArr[n] =  oneTwoThreeSumFunc(n - 3) + oneTwoThreeSumFunc(n - 2) + oneTwoThreeSumFunc(n - 1);
        return resultArr[n];
    } else {
        return resultArr[n];
    }
}

for (let i = 1; i <= input[0]; i++) {
    console.log(oneTwoThreeSumFunc(input[i]));
}