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

const [N, M] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const cities = [];

for (let n = 0; n < N; n++) {
  cities.push(
    input()
      .trim()
      .split(" ")
      .map((v) => Number(v))
  );
}

let cLocations = [];
const hLocations = [];

for (let row = 0; row < N; row++) {
  for (let column = 0; column < N; column++) {
    if (cities[row][column] === 2) {
      cLocations.push([row, column]);
    } else if (cities[row][column] === 1) {
      hLocations.push([row, column]);
    }
  }
}

function getCombinations(arr, selecetedNumber) {
  // 조합 함수
  if (selecetedNumber === 1) return arr.map((v) => [v]);

  const result = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, selecetedNumber - 1);
    const attached = combinations.map((v) => [fixed, ...v]);
    result.push(...attached);
  });

  return result;
}

cLocations = getCombinations(cLocations, M); // 가능한 치킨 집 조합 저장
const results = [];

for (const cLocation of cLocations) {
  // 치킨 집 조합마다
  let hap = 0;
  for (const hLocation of hLocations) {
    // 집의 위치에서 치킨 집 거리 구하기
    const temp = [];
    for (const c of cLocation) {
      temp.push(Math.abs(hLocation[0] - c[0]) + Math.abs(hLocation[1] - c[1]));
    } // 치킨 집 별로 거리 구하기
    hap += Math.min(...temp); // 치킨 거리 확정 짓고 조합마다 치킨 거리 총합에 더하기
  }
  results.push(hap);
}

console.log(Math.min(...results)); // 가장 작은 치킨 거리 조합 값 출력
