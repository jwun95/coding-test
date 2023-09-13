function solution(n, a, b) {
  var [a, b] = a < b ? [a, b] : [b, a]; // 더 작은 쪽을 a로
  if (a % 2 === 1 && b - a === 1) return 1;
  var answer = 1;
  for (var i = 2; i <= Math.log2(n); i++) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    if (a % 2 === 1 && b - a === 1) {
      answer = i;
      break;
    }
  }
  return answer;
}