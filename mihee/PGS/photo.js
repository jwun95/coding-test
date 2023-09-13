function solution(name, yearning, photo) {
  var answer = [];

  for (var i = 0; i < photo.length; i++) {
    answer.push(0);
    for (var j = 0; j < name.length; j++) {
      if (photo[i].includes(name[j]))
        answer[i] += yearning[j];
    }
  }
  return answer;
}