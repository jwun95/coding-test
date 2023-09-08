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

const T = Number(input());
const gears = [];

for (let t = 0; t < T; t++) {
  gears.push(input().trim().split(""));
}

const K = Number(input());
const order = [];
let answer = 0;

for (let k = 0; k < K; k++) {
  order.push(
    input()
      .trim()
      .split(" ")
      .map((v) => Number(v))
  );
}

function circle(g, d) {
  if (d === 1) {
    g.unshift(g.pop());
  } else {
    g.push(g.shift());
  }
  return g;
}

for (const o of order) {
  const [idx, dir] = o;
  const circleList = [];
  circleList.push([idx - 1, dir]);
  const dirs = [dir, dir];

  for (let n = idx; n < gears.length; n++) {
    if (gears[n][6] !== gears[n - 1][2]) {
      dirs[0] = dirs[0] * -1;
      circleList.push([n, dirs[0]]);
    } else {
      break;
    }
  }

  for (let f = idx - 2; f >= 0; f--) {
    if (gears[f][2] !== gears[f + 1][6]) {
      dirs[1] = dirs[1] * -1;
      circleList.push([f, dirs[1]]);
    } else {
      break;
    }
  }

  for (const c of circleList) {
    gears[c[0]] = circle(gears[c[0]], c[1]);
  }
}

console.log(gears.filter((v) => v[0] === "1").length);
