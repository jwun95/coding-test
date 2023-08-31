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

const direction = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, -1],
  [0, 0, 1],
];

function bfs(l, g, L, R, C) {
  g[l[0][0]][l[0][1]][[0][2]] = "#";
  while (l.length) {
    const [f, y, x, count] = l.shift();

    for (const d of direction) {
      const nx = x + d[0];
      const ny = y + d[1];
      const nf = f + d[2];

      if (
        nx >= 0 &&
        nx < C &&
        ny >= 0 &&
        ny < R &&
        nf >= 0 &&
        nf < L &&
        g[nf][ny][nx] !== "#"
      ) {
        if (g[nf][ny][nx] === "E") return `Escaped in ${count + 1} minute(s).`;
        g[nf][ny][nx] = "#";
        l.push([nf, ny, nx, count + 1]);
      }
    }
  }
  return "Trapped!";
}

function findStart(graph, L, R, C) {
  for (let l = 0; l < L; l++) {
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (graph[l][r][c] === "S") return [l, r, c, 0];
      }
    }
  }
}

const answer = [];

while (true) {
  const [L, R, C] = input()
    .trim()
    .split(" ")
    .map((v) => Number(v));

  if (L === 0) break;

  const graph = [];
  for (let i = 0; i < L; i++) {
    const row = [];
    for (let r = 0; r < R; r++) {
      row.push(input().trim().split(""));
    }
    graph.push(row);
    input();
  }

  answer.push(bfs([findStart(graph, L, R, C)], graph, L, R, C));
}

console.log(answer.join("\n"));
