function solution(t, p) {
  var answer = 0;
  const arr = [...t];
  const sum = Number(p);
  for (var i = 0; i <= arr.length - p.length; i++) {
    var partial = arr.slice(i, i + p.length); // p와 길이가 같은 부분문자열
    var p_num = Number(partial.join("")); // 부분문자열 -> 숫자 변환 
    if (p_num <= sum)
      answer += 1;
  }
  return answer;
}