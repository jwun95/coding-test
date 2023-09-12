// 23:56 ~ 00:09
function solution(s) {
  const chars = new Map();
  return [...s].map((char, index) => {
    const foundCharIndex = chars.get(char);

    // 첫 단어라면 chars에 index 저장후 -1 리턴
    if (foundCharIndex === undefined) {
      chars.set(char, index);
      return -1;
    }

    // 아니라면 이전 Index와 현재 Index 거리 리턴후 현재 index로 업데이트
    const distance = index - foundCharIndex;
    chars.set(char, index);
    return distance;
  });
}
