// let [n, ...user]= require('fs').readFileSync('week_4/10814.txt').toString().split('\n');

let [n, ...user] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(
user
.map(users=>({age: parseInt(users.split(' ')[0]), name:users.split(' ')[1]}))
.sort((a,b)=>a.age-b.age)
.map(users=>String(users.age)+ " "+ users.name)
.join("\n")  
)


