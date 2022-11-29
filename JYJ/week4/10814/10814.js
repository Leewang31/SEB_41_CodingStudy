// 나이순 정렬
// 사람들의 나이와 이름이 가입한 순서대로 주어지며, 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 코드 작성

let fs = require("fs");
let input = fs.readFileSync("10814.txt").toString().trim().split("\n");

let n = input.shift();

input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

console.log(input.join("\n"));
