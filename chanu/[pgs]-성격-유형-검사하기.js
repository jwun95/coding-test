// 23:40 ~ 23:54
// R T
// C F
// J M
// A N
function solution(survey, choices) {
  const types = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.forEach((s, index) => {
    const [disagree, agree] = s.split("");
    const choice = choices[index];

    // 동의
    if (choice > 4) {
      // ex) 1 - 4 -> 3, 7 - 4 -> 3
      types[agree] += Math.abs(choice - 4);
    }
    // 비동의
    else if (choice < 4) {
      types[disagree] += Math.abs(choice - 4);
    }
  });

  let result = "";
  result += types["R"] >= types["T"] ? "R" : "T";
  result += types["C"] >= types["F"] ? "C" : "F";
  result += types["J"] >= types["M"] ? "J" : "M";
  result += types["A"] >= types["N"] ? "A" : "N";

  return result;
}
