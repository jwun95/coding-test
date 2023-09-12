function solution(food) {
  var answer = '';
  for (var i = 1; i < food.length; i++) { 
    if (food[i] > 1) // 왼쪽 배치
      answer += i.toString().repeat(Math.floor(food[i] / 2));
  }
  answer += 0; // 가운데 물 배치
  var temp = answer.split("").reverse().join(""); // 오른쪽 배치
  answer += temp.substring(1); 
  return answer;
}