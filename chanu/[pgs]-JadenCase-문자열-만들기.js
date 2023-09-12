// 00:56 ~
function solution(s) {
  // 공백을 기준으로 자른다
  // 전체를 소문자로 변환한다
  // 첫번째 문자만 대문자로 변환한다
  // 리턴
  return s
    .split(" ")
    .map((word) => word.toLowerCase())
    .map((word) => {
      const firstChar = word.substring(0, 1).toUpperCase();
      const rest = word.substring(1);
      return firstChar + rest;
    })
    .join(" ");

  return lowerWords;
}
