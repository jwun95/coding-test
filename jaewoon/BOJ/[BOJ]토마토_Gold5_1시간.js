const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("../input.txt").toString()
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [M, N] = input()
  .trim()
  .split(" ")
  .map((v) => v);

const graph = [];

for (let i = 0; i < N; i++) {
  graph.push(
    input()
      .trim()
      .split(" ")
      .map((v) => Number(v))
  );
}

function solution() {
  const queue = [];
  let zeroCount = 0;

  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      if (graph[n][m] === 1) queue.push([n, m]);
      else if (graph[n][m] === 0) zeroCount++;
    }
  }

  if (!zeroCount) return 0;

  const answer = bfs(queue);

  function bfs(queue) {
    let count = 0;
    let idx = 0;

    const direction = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    while (queue.length > idx) {
      const [y, x] = queue[idx];

      for (const d of direction) {
        const nextY = y + d[0];
        const nextX = x + d[1];

        if (
          nextY >= 0 &&
          nextY < N &&
          nextX >= 0 &&
          nextX < M &&
          graph[nextY][nextX] === 0
        ) {
          graph[nextY][nextX] = graph[y][x] + 1;

          count = graph[nextY][nextX];
          queue.push([nextY, nextX]);
        }
      }
      idx++;
    }
    return count;
  }

  for (const g of graph) {
    if (g.some((v) => v === 0)) return -1;
  }

  return answer - 1;
}

console.log(solution());
