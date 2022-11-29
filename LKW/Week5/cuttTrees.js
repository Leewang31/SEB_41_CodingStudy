const input = require('fs').readFileSync('./dev/2805').toString().trim().split("\n");
const [N, M] = input[0].trim().split(' ')   //4, 7
const trees = input[1].split(' ')   //20, 15, 10, 17
const max = Math.max(...trees)  //20

const binarySearch = (top, bot) => {
    let temp = 0;
    while (bot <= top) {
        let mid = parseInt((top + bot) / 2);
        let count = 0;
        for (el of trees) {
            if (el - mid >= 0) {
                count += el - mid;
            }
        }
        if (count >= M) {
            if (mid > temp) temp = mid;
            bot = mid + 1;
        } else {
            top = mid - 1;
        }
    }
    return temp;
}
console.log(binarySearch(Number(max), 0))