function solution(k, score) {
  var answer = [score[0]];
  var arr = score.slice(0, k); // 현재 명예의 전당

  for (var i = 1; i < k; i++) { // k일까지 최하위 점수
    if (i === score.length) // k가 score의 길이보다 큰 경우
      break;
    answer.push(Math.min(...score.slice(0, i + 1)));
  }

  for (var i = k; i < score.length; i++) { // k일 이후 최하위 점수 찾기
    if (score[i] > Math.min(...arr)) {
      arr.push(score[i]);
      arr = arr.sort((a, b) => b - a).slice(0, k);
    }
    answer.push(Math.min(...arr));
  }
  return answer;
}