let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input=[5,`6 3 2 10 -10`, 8, `10 9 -5 2 3 4 5 -10`];

let N = Number(input[0]);
let ownedCard = new Set(input[1].split(' ').map(Number));
// console.log(ownedCard)
let M = Number(input[2]);
let card = input[3].split(' ').map(Number);
let arr =[] //결과값을 모을 배열

for(let i=0; i<M; i++){
    if(ownedCard.has(card[i])) arr.push(1) //has 문법으로 가지고 있으면 1 도출 아니면 0
    else arr.push(0)
}
console.log(arr.join(' '));



// let answer = '';
// for(let i = 0; i < M; i++) {
//     if(hasCards.has(cards[i])) answer += 1 + ' '
//     else answer += 0 + ' '; //띄어쓰기 같이 입력하는 방식도 있음
// }

// console.log(answer);