const input = require('fs').readFileSync('./dev/11650').toString().trim().split("\n");
input.shift()
input.sort((a,b)=>{
    if(a.split(' ')[0]===b.split(' ')[0]){
        return a.split(' ')[1]-b.split(' ')[1]
    }else{
        return a.split(' ')[0]-b.split(' ')[0]
    }
})
console.log(input.join('\n'))