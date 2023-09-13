function solution(n, m, section) {
  if (m === 1 || n === 1) return section.length;
  var answer = 0;
  var endPoint = 0;

  section.forEach((s) => {
    if (s > endPoint) {
      answer += 1
      endPoint = s + m - 1;
    }
  })

  return answer;
}