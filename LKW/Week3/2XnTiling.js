/*
* 1->1
* 2->2
* 3->3
* 4->5
* 5->8
* 6->13
* 7->21
* 8->34
* 9->55
* n->(n-1)+(n-2)
* */
//11726
// let fs = require('fs');
// let number = Number(fs.readFileSync('./dev/stdin').toString());
let fs = require('fs');
let number = Number(fs.readFileSync('./dev/11726').toString());
let arrNum = [0, 1, 2]

for (let i = 3; i <= number; i++) {
    arrNum[i] = (arrNum[i - 1] + arrNum[i - 2]) % 10007
}
console.log(arrNum[number])