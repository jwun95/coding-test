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
let str = "666";
let num = 666;
const numList = [];

while (numList.length < N) {
  if (String(num).includes(str)) numList.push(num);
  num++;
}

console.log(numList[N - 1]);
