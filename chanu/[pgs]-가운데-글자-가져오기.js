// 20:36 ~ 20:42
function solution(s) {
  const length = s.length;
  let middleIndex;

  // 단어의 길이가 짝수라면 가운데 두글자 반환
  if (length % 2 === 0) {
    middleIndex = Math.floor(length / 2) - 1;
    return s.slice(middleIndex, middleIndex + 2);
  }

  // 아니라면 가운데 글자만 반환
  middleIndex = length / 2;
  return s.slice(middleIndex, middleIndex + 1);
}
