// 23:42 ~ 00:00
function solution(n, words) {
  const uniqueWords = new Set();
  let turn = 0; // 차례
  let beforeWord = null;

  for (let index = 0; index < words.length; index++) {
    const word = words[index];
    const playerNumber = (index % n) + 1;
    turn = Math.floor(index / n) + 1;

    // 중복 단어
    if (uniqueWords.has(word)) {
      return [playerNumber, turn];
    }

    // 끝말잇기 실패
    if (beforeWord && beforeWord.at(-1) !== word.at(0)) {
      return [playerNumber, turn];
    }

    uniqueWords.add(word);
    beforeWord = word;
  }

  return [0, 0];
}
