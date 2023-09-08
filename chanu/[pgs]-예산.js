// 20:12 ~ 20:19
function solution(d, budget) {
  // 오름차순으로 정렬후 0부터 N번째 까지 더한 값이 budget 값 만큼 살수있을때 최대 지원 개수
  const sorted = d.sort((a, b) => a - b);
  let result = 0;

  for (let amount of d) {
    budget -= amount;

    if (budget < 0) break;

    result++;
  }

  return result;
}
