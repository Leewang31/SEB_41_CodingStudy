//2581 소수
let fs = require('fs');
let input = fs.readFileSync('./dev/2581').toString().split('\n');

let firstNum = Number(input[0]); // -> 60
let secondNum = Number(input[1]); // -> 100

let primeArr = []

for (let i = firstNum; i <= secondNum; i++) {
    for(let j = 2; j<=i;j++){
        if(i===j){
            primeArr.push(i)
        }
        else if(i%j ===0){
            break;
        }
    }
}

if(primeArr.length === 0 ){
    console.log(-1)
}else{
    console.log(primeArr.reduce((a,b)=>a+b));
    console.log(primeArr[0]);
}

