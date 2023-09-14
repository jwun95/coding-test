const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("./input.txt").toString()
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [R, C] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const routes = [];

for (let r = 0; r < R; r++) {
  routes.push(
    input()
      .trim()
      .split(" ")
      .map((v) => Number(v))
  );
}

function cheeseCheck() {
  let num = 0;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (routes[r][c]) num++;
    }
  }
  return num;
}

const directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function dfs(curr, v) {
  const [x, y] = curr;

  for (const d of directions) {
    const nextX = x + d[0];
    const nextY = y + d[1];

    if (
      nextX >= 0 &&
      nextX < R &&
      nextY >= 0 &&
      nextY < C &&
      !v[nextX][nextY]
    ) {
      v[nextX][nextY] = true;
      if (routes[nextX][nextY] === 1) routes[nextX][nextY] = 0;
      else dfs([nextX, nextY], v);
    }
  }
}

let count = 0;
const answer = [];

while (true) {
  const cheeseNum = cheeseCheck();
  if (cheeseNum === 0) break;
  answer.push(cheeseNum);
  const visited = Array.from(Array(R), () => Array(C).fill(false));
  visited[0][0] = true;
  dfs([0, 0], visited);
  count++;
}

console.log(count);
console.log(answer[answer.length - 1]);
