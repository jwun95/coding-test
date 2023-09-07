function solution(cards1, cards2, goal) {
  for (var i = 0; i < goal.length; i++) {
    if (cards1[0] === goal[i]) {
      cards1 = cards1.slice(1, cards1.length);
    } else if (cards2[0] === goal[i]) {
      cards2 = cards2.slice(1, cards2.length);
    } else {
      return "No";
    }
  }
  return "Yes";
}