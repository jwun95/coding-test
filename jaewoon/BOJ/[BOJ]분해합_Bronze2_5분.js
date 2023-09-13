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

const N = Number(input().trim());
let answer = 0;
for (let i = 1; i < N; i++) {
  let add = 0;
  for (let k = 0; k < String(i).length; k++) {
    add += Number(String(i)[k]);
  }
  if (i + add === N) {
    answer = i;
    break;
  }
}

console.log(answer);
