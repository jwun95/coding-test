function solution(brown, yellow) {
  var answer = [];
  var k = Math.floor(Math.sqrt(yellow)); // max yellow height

  for (var i = 1; i <= k; i++) {
    if (yellow % i === 0) {
      var w = yellow / i; // w = yellow width 후보, i = height 후보
      if ((2 * i + 2 * w + 4) == brown) { // yellow의 width, height 기반으로 brown 격자 개수 계산
        answer.push(w + 2);
        answer.push(i + 2);
      }
    }
  }

  return answer;
}