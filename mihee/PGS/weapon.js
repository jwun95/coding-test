function solution(number, limit, power) {
  var answer = 0;
  var arr = []; // 약수 개수 배열
  for (var i = 1; i <= number; i++) { // 약수 개수 구하기
    arr.push(0);
    for (var j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (j * j !== i) arr[i - 1] += 2;
        else arr[i - 1] += 1; // j가 i의 제곱근인 경우
      }
    }
  }
  arr.forEach((a, i) => {
    if (a > limit)
      arr[i] = power;
  })
  answer = arr.reduce((acc, val) => acc + val, 0);
  return answer;
}