// 14:50 ~ 14:52
function solution(arr) {
  // 이전 숫자와 비교하여 같지 않은 것만 리턴
  return arr.filter((num, index) => num !== arr[index - 1]);
}
