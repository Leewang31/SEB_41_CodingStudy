const [input, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
N = Number(input)
const arr = Array.from(Array(N + 1), () => new Array())
const result = new Array(N + 1).fill(0)
for (let i = 0; i < inputs.length; i++) {
    const [a, b] = inputs[i].trim().split(' ').map((e)=>+e)
    arr[a].push(b)
    arr[b].push(a)
}
const dfs = () => {
    let queue = [];
    queue.push(1);
    while (queue.length) {
        let check = queue.shift();
        for (e of arr[check]) {
            if (!result[e]) {
                result[e] = check;
                queue.push(e)
            }
        }
    }

}

dfs()
console.log(result.slice(2).join('\n'))