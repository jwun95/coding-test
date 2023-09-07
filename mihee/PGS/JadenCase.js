function solution(s) {
  var answer = '';
  var arr = s.split(' ');
  var result = []

  for (var i = 0; i < arr.length; i++) {
    var word = [...arr[i]];
    if (word.length === 0) { // 공백 처리
      result.push('');
      continue;
    }
    if (isNaN(word[0])) // 맨 앞이 숫자가 아닌 경우
      word[0] = word[0].toUpperCase();
    for (var j = 1; j < word.length; j++)
      word[j] = word[j].toLowerCase();
    result.push(word.join(""));
  }
  answer = result.join(' ');
  return answer;
}