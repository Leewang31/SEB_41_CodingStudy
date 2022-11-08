//2839
// let fs = require('fs');
// let input = Number(fs.readFileSync('./dev/stdin').toString());
let fs = require('fs');
let input = Number(fs.readFileSync('./dev/2839').toString());

let num = input
let count = 0;

while (num >= 0) {
    if (num === 0) {
        return console.log(count)
    }
    if (num % 5 === 0) {
        return console.log(count + num / 5)
    } else {
        count++;
        num -= 3
    }
}
return console.log(-1)