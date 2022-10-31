//1978
// let fs = require('fs');
// let input = fs.readFileSync('./dev/stdin').toString().split('\n');
let fs = require('fs');
let input = fs.readFileSync('./dev/1978').toString().split('\n');

let number = Number (input[0])
let arr = []

let result = 0

for(e of input[1].split(' ')){
    arr.push(Number(e))
}

for(let i = 0 ; i < number; i++){
    if(arr[i]<2){
        continue;
    }
    for(let j = 2; j<=arr[i];j++){
        if(arr[i]===j){
            result++
        }
        else if(arr[i]%j === 0){
            break;
        }
    }
}

console.log(result)