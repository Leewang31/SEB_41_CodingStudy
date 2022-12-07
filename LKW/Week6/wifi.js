const input = require('fs').readFileSync('./dev/2110').toString().trim().split("\n");
const [information, ...H] = input
const [_, count] = information.split(' ') // count = 3
let house = H.map((el) => +el).sort((a, b) => a - b) //[ 1, 2, 4, 8, 9 ]

let min = 1
let max = house[house.length - 1]

while (min <= max) {
    let wifiCount = 1;
    let wifiPosition = house[0]
    let mid = Math.floor((min + max) / 2)
    house.forEach((el) => {
        if (el >= wifiPosition + mid) {
            wifiCount++;
            wifiPosition = el
        }
    })
    if (count > wifiCount) {
        max = mid - 1;
    } else {
        min = mid + 1
    }
}

console.log(max)