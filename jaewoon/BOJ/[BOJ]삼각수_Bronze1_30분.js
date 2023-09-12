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

function calculator(nums, limit) {
  for (const a of nums) {
    for (const b of nums) {
      for (const c of nums) {
        if (a + b + c === limit) return 1;
      }
    }
  }
  return 0;
}

for (let i = 0; i < N; i++) {
  const numberList = [];
  let count = 1;
  const K = Number(input().trim());
  while ((count * (count + 1)) / 2 < K) {
    numberList.push((count * (count + 1)) / 2);
    count++;
  }

  console.log(calculator(numberList, K));
}
