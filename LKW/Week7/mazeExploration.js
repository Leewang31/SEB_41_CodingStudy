const [input, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, M] = input.trim().split(' ').map((e) => +e);
let maze = []
const check = Array.from(Array(N), () => new Array(M).fill(0))
for (let i = 0; i < N; i++) {
    let a = inputs[i].trim().split('').map((e) => +e);
    maze.push(a)
}
const bfs = (y, x) => {
    let move_y = [0, 0, -1, 1];
    let move_x = [-1, 1, 0, 0];
    let queue = [];
    queue.push([y, x])
    check[y][x] = maze[y][x]
    while (queue.length) {
        const [tempY, tempX] = queue.shift();
        for (let i = 0; i < 4; i++) {
            const [ny, nx] = [tempY + move_y[i], tempX + move_x[i]]
            if (ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
            if (maze[ny][nx]===1&&check[ny][nx]===0) {
                check[ny][nx] = check[tempY][tempX] + 1
                queue.push([ny, nx])
            }
        }
    }
}
bfs(0, 0)
return console.log(check[N - 1][M - 1])