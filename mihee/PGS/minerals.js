function solution(picks, minerals) {
  var value = [25, 5, 1]; // 다이아, 철, 돌 가중치
  var mineralsValue = []; // 광물 배열을 각 광물의 value로 치환
  var totalPicks = picks.reduce((acc, val) => acc + val, 0); // 곡괭이 총 개수
  var answer = 0;

  // 곡괭이로 캘 수 있는 총 광물의 수보다 주어진 광물이 더 많은 경우, 캘 수 있는 수만큼 잘라냄 
  if (minerals.length > totalPicks * 5)
    minerals = minerals.slice(0, totalPicks * 5);

  // 광물을 5개 단위로 값을 나누어 저장
  var temp = [];
  minerals.forEach((min, i) => {
    if (min === "diamond")
      temp.push(value[0]);
    else if (min === "iron")
      temp.push(value[1]);
    else temp.push(value[2]);
    if (i % 5 === 4 || i === minerals.length - 1) {
      mineralsValue.push(temp);
      temp = [];
    }
  })

  // 5개씩 나눈 광물들의 value 합이 큰 순서대로 정렬
  var summedArray = mineralsValue.map(subArray => ({
    subArray,
    sum: subArray.reduce((acc, val) => acc + val, 0)
  }));

  var sortedArray = summedArray.sort((a, b) => b.sum - a.sum);
  mineralsValue = sortedArray.map(item => item.subArray);

  // 현재 사용하는 곡괭이
  var usedPick = 0;

  // 피로도 계산
  for (var i = 0; i < mineralsValue.length; i++) {
    if (picks[0] > 0)
      usedPick = 0;
    else if (picks[1] > 0)
      usedPick = 1;
    else usedPick = 2;
    for (var j = 0; j < mineralsValue[i].length; j++) {
      answer += Math.ceil(mineralsValue[i][j] / value[usedPick]);
    }
    picks[usedPick] -= 1;
  }

  return answer;
}