//2609
//let fs = require('fs');
// let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let fs = require('fs');
let input = fs.readFileSync('./dev/2609').toString().split(' ');

let num1 = Number(input[0]);
let num2 = Number(input[1]);

let gcd = 1;

for(let i=2;i<=Math.min(num1,num2);i++){
    if(num1%i===0&&num2%i===0){
        gcd = i;
    }
}

let lcm = num1*num2/gcd
console.log(gcd)
console.log(lcm)