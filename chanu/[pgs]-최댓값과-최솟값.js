// 00:52 ~ 00:54
function solution(s) {
  const sorted = s.split(" ").sort((a, b) => a - b);
  return `${sorted[0]} ${sorted.at(-1)}`;
}
