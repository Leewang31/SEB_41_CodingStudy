// 1463
// let fs = require('fs');
// let input = Number(fs.readFileSync('./dev/stdin').toString());

let fs = require('fs');
let input = Number(fs.readFileSync('./dev/1463').toString());   //2

const arr = new Array(input + 1).fill(0)
for (let i = 2; i <= input; i++) {
    // console.log(i)
    arr[i] = arr[i - 1] + 1
    if (i % 2 === 0) {
        arr[i] = Math.min(arr[i], arr[i / 2] + 1)
    }
    if (i % 3 === 0) {
        arr[i] = Math.min(arr[i], arr[i / 3] + 1)
    }
}
console.log(arr[input])