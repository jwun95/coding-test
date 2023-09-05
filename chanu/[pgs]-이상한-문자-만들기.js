// 21:45 ~ 22:01
function solution(strings) {
  const splited = strings.split(" ");
  return splited
    .map((s) =>
      s
        .split("")
        .map((c, idx) => {
          if (isEvenNum(idx)) return c.toUpperCase();
          else return c.toLowerCase();
        })
        .join("")
    )
    .join(" ");
}

function isEvenNum(num) {
  return num % 2 === 0;
}
