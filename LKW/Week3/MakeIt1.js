// 1463
// let fs = require('fs');
// let input = Number(fs.readFileSync('./dev/stdin').toString());

let fs = require('fs');
let input = Number(fs.readFileSync('./dev/1463').toString());   //2

let result = input
let count = 0;
const func = (n,count) => {
    if(n===1){
        console.log('final',count)
        result = Math.min(count,result)
    }
    else{
        if(n%3===0){
            console.log('n%3===0: ',n)
            func(n/3,count+1)
        }
        if(n%2===0){
            console.log('n%2===0: ',n)
            func(n/2,count+1)
        }
        console.log('n-1: ',n)
        func(n-1,count+1)
    }
}

func(input,count)
console.log(result)