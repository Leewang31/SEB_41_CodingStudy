let [n,c,...position] = require("fs").readFileSync("week_6/2110.txt").toString().trim().split(/\s/).map(Number);

// let [n,c,...position] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(Number)

//집의 개수(n) : 5
//공유기의 개수(c) : 3
//집의 좌표 (position): [1,2,8,4,9]

position.sort((a,b)=>a-b); //[1,2,4,8,9]

const isInstall = (distance)=>{
    // console.log(distance) => 5,2,3,4
    let count = c-1;
    let prevPosition = position[0]
    for(let i=1; i<position.length; i++){
        if(position[i]-prevPosition >= distance){
            count--;
            prevPosition = position[i];
        }
    }
    return count <= 0;
};

let min = 1;
let max = position[position.length -1];
while(min <=max){
    const mid = parseInt((min+max)/2);
    if(isInstall(mid)){
        min = mid+1;
    } else{
        max=mid-1;
    }
}
console.log(max);