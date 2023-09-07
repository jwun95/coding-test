// 15:12 ~ 15:14
function solution(num) {
  let number = num;
  let count = 0;

  while (number !== 1) {
    if (count === 500) return -1;

    if (number % 2 === 0) {
      number /= 2;
    } else if (number % 2 === 1) {
      number = number * 3 + 1;
    }

    count++;
  }

  return count;
}
