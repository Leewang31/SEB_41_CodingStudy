// 2775 부녀회장이 될테야
// let fs = require('fs');
// let input = fs.readFileSync('./dev/stdin').toString().split('\n');
let fs = require('fs');
let input = fs.readFileSync('./dev/2775').toString().split('\n');
/**
 * a[i][j] = a[i][j-1] + a[i-1][j]
 * */
input = input.map((el) => Number(el))

let ho = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]]

const func = (n, k) => {
    if (ho[n][k] !== undefined) {
        return ho[n][k]
    } else {
        return ho[n][k] = func(n, k - 1) + func(n - 1, k)
    }
}

for (let i = 1; i <= input[0] * 2; i = i + 2) {
    while (ho[input[i]] === undefined) {
        ho.push([0])
    }
    console.log(func(input[i],input[i+1]))
}