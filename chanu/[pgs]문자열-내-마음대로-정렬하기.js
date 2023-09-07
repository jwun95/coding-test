// 20:24 ~ 23:34

function solution(strings, n) {
  return strings.sort((a, b) => {
    // n번째 문자 기준 정렬
    if (a[n] !== b[n]) {
      return a[n] > b[n] ? 1 : -1;
    }

    // 같다면 전체 문자열 기준 정렬
    return a > b ? 1 : -1;
  });
}
