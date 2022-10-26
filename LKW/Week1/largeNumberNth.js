//2693
//let fs = require('fs');
// let input = fs.readFileSync('./dev/stdin').toString().split('\n');
/**
 * 배열 A가 주어졌을 때, N번째 큰 값을 출력하는 프로그램을 작성하시오.
 * 배열 A의 크기는 항상 10이고, 자연수만 가지고 있다. N은 항상 3이다.
 * */
let fs = require('fs');
let input = fs.readFileSync('./dev/2693').toString().split('\n');

let count = Number(input[0])    //-> 4
let arr = [count];

for(let i=0;i<count;i++){
    arr[i]=input[i+1].replace('\r','').split(' ').sort((a,b)=>a-b).reverse()
    console.log(Number(arr[i][2]))
}

