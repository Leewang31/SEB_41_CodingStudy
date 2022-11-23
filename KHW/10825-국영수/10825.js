const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './10825.txt';
let arr = fs.readFileSync(filePath).toString().trim().split('\n')
let n = arr.shift()

const names = [];
arr = arr
        .map(v => v.split(" ").map(vv => Number(vv)||vv))
        .sort((a, b) => {
            if (a[1] < b[1]) return 1
            else if (a[1] > b[1]) return -1
            else {
                if (a[2] > b[2]) return 1
                else if (a[2] < b[2]) return -1
                else {
                    if (a[3] < b[3]) return 1
                    else if (a[3] > b[3]) return -1
                    else {
                        if (a[0] > b[0]) return 1
                        else if (a[0] < b[0]) return -1
                        else return 0
                    }
                }
            }
        });
arr.forEach(v => names.push(v[0]));
console.log(names.join("\n"));