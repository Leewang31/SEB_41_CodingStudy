const input = require('fs').readFileSync('./dev/1654').toString().split("\n");
const [K, N] = input[0].trim().split(' ')
const lans = input.slice(1)
const max = Number(Math.max(...lans))

const binarySearch = (top, bot) => {
    let result = 0;
    while (bot <= top) {
        let count = 0;
        let mid = parseInt((top + bot) / 2)
        for (el of lans) {
            count += parseInt(el / mid);
        }
        if (count >= N) {
            result = mid;
            bot = mid + 1;
        } else {
            top = mid - 1;
        }
    }
    return result
}
console.log(binarySearch(max, 1))