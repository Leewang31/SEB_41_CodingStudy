const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

input = input.map((el)=> +el)//.split(' ')

const a = input[0];
const b = input[1];


let i = a
let j = b 

while (i%j !== 0) {
    let n=i %j;
    if(n !==0){
        i = j;
        j = n;
    }
}
console.log(j)
console.log(a*b/j)