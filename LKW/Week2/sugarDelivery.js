//2839
// let fs = require('fs');
// let input = Number(fs.readFileSync('./dev/stdin').toString());
let fs = require('fs');
let input = Number(fs.readFileSync('./dev/2839').toString());

// let num = input
// let count = 0;
//
// while (num >= 0) {
//     if (num === 0) {
//         return console.log(count)
//     }
//     if (num % 5 === 0) {
//         return console.log(count + num / 5)
//     } else {
//         count++;
//         num -= 3
//     }
// }
// return console.log(-1)

// * input+1 만큼의 공간을 갖는 배열을 만들고 각각을 -1로 채운다
let arr = new Array(input + 1).fill(-1)

//* 배열에 3번 5번 인덱스는 1로 채운다 여기서 1은 해당 숫자는 3또는 5에 나눠지며 몫은 1이다
arr[3] = 1;
arr[5] = 1;

// * 다음 함수는 arr[i]를 바꿔줘야 하는 경우이다. 만약 -1인 경우 i에서 n(3또는 5)을 뺀 값에서 1을 더하고,
// * -1이 아닌경우  i에서 n(3또는 5)을 뺀 값에서 1을 더한값과 비교해서 더 작은 값을 할당한다
const arrChange = (i, n) => {
    if (arr[i] === -1) {
        arr[i] = arr[i - n] + 1
    } else {
        arr[i] = Math.min(arr[i], arr[i - n] + 1);
    }
}

// * 6부터 for을 돌려 3또는 5를 뺀 값이 -1이 아니라면 해당 인덱스는 3*a+5*b (a,b>=0, 정수)로 만들수 있다.
for (let i = 6; i <= input; i++) {
    if (arr[i - 3] !== -1) {
        arrChange(i, 3)
    }
    if (arr[i - 5] !== -1) {
        arrChange(i, 5)
    }
}

console.log(arr[input])