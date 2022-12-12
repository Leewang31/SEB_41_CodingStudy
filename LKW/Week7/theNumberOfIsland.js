const input = require('fs').readFileSync('./dev/4963').toString().trim().split("\n");

let move_y = [0, 0, -1, 1, -1, 1, -1, 1];
let move_x = [-1, 1, 0, 0, -1, -1, 1, 1];
const solution = (w, h, graph) => {
    let count = 0;
    const visited = Array.from(Array(h), () => new Array(w).fill(false))
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (visited[i][j] === false && graph[i][j] === 1) {
                count++
                completeSearch(i, j)
            }
        }
    }
    console.log(count)

    function completeSearch(y, x) {
        if (visited[y][x] === false && graph[y][x] === 1) {
            visited[y][x] = true;
            for (let i = 0; i < 8; i++) {
                if (y + move_y[i] >= 0 && y + move_y[i] < h && x + move_x[i] >= 0 && x + move_x[i] < w) {
                    completeSearch(y + move_y[i], x + move_x[i])
                }
            }
        }
    }
}
const cutFile = (input) => {
    while (input.length > 1) {
        const N = input.shift()
        const [w, h] = N.split(' ').map((el) => +el)
        const graph = []
        for (let i = 0; i < h; i++) {
            let a = input[0].split(' ').map((el) => +el)
            graph.push(a)
            input.shift()
        }
        solution(w, h, graph)
    }
}
cutFile(input)
