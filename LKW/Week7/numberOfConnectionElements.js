const [input, ...inputs] = require('fs').readFileSync('./dev/11724').toString().trim().split("\n");
const [N, M] = input.split(' ').map((el) => +el)
const graph = []
const visited = new Array(N + 1).fill(false)
let count = 0;
for (let i = 1; i <= N; i++) {
    graph[i] = []
}
for (let i = 0; i < inputs.length; i++) {
    let [a, b] = inputs[i].split(' ').map((el) => +el)
    graph[a].push(b);
    graph[b].push(a);
}
for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        DFS(i)
        count++;
    }
}
console.log(count)

function DFS(v) {
    if (visited[v] === true) return
    visited[v] = true
    for (let i = 0; i < graph[v].length; i++) {
        if (visited[graph[v][i]] === false) {
            DFS(graph[v][i])
        }
    }
}

