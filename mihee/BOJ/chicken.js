const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
M = Number(input[0].split(' ')[1]);

var city = [];
for (var i = 1; i < input.length; i++) {
  city.push(input[i].trim().split(" ").map(Number));
}

var chickenPosition = []; // 치킨집 좌푬 모음
var homePosition = []; // 집 좌표 모음

// 치킨집, 집 좌표 저장
for (var i = 0; i < city.length; i++) {
  if (!city[i].includes(2) && !city[i].includes(1))
    continue;
  for (var j = 0; j < city[i].length; j++) {
    if (city[i][j] === 1)
      homePosition.push([i + 1, j + 1]);
    if (city[i][j] === 2)
      chickenPosition.push([i + 1, j + 1]);
  }
}

// M개 치킨집 조합
var chickenCombi = Combination(chickenPosition, M);

// 각 조합에서 도시의 치킨 거리
var totalDist = new Array(chickenCombi.length).fill(0);

homePosition.forEach((home, i) => {
  chickenCombi.forEach((combi, j) => { // 각 조합에 대해
    var dist = Infinity; // 현재 집에서 가장 가까운 치킨집 거리
    combi.forEach((chicken, k) => {
      var d = Math.abs(home[0] - chicken[0]) + Math.abs(home[1] - chicken[1]);
      dist = dist > d ? d : dist;
    })
    totalDist[j] += dist;
  })
})

console.log(Math.min(...totalDist)); // 최단 도시 치킨 거리


function Combination(arr, n) {
  if (n === 1)
    return arr.map((a) => [a]);
  const result = [];
  arr.forEach((curNum, idx) => {
    const subCombi = Combination(arr.slice(idx + 1), n - 1);
    const combine = subCombi.map((a) => [curNum, ...a]);
    result.push(...combine);
  })
  return result;
}