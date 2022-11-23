let [n,...arr] = require('fs').readFileSync('week_4/11650.txt').toString().split('\n');
console.log(arr)

// let [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let num = arr
.map(el => el.split(" ").map(e => Number(e)));

console.log(
    num.sort((a,b)=>{
        //x좌표가 더 큰 경우(x좌표가 증가하는 순서로 정렬)
        if(a[0] > b[0]){
            return 1;
        } else if(a[0]<b[0]){
            return -1;
        } else{
            //x좌표가 같은 경우 (y좌표가 증가하는 순서로 정렬)
            if(a[1]>b[1]){
                return 1;
            } else{
                return -1;
            }
        }
    })
    .join("\n")
)

