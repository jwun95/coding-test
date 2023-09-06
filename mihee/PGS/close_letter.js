function solution(s) {
  var str = [...s];
  var used = [];
  var answer = [];

  str.forEach((x, i) => {
    if (!used.includes(x)) { // 처음 나온 글자
      used.push(x);
      answer.push(-1);
    }
    else { // 처음 아닌 글자 거리 구하기
      var temp = str.slice(0, i).reverse();
      var idx = temp.findIndex((a) => a === x);
      answer.push(idx + 1);
    }
  })

  return answer;
}