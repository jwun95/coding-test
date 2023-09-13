// 00:03 ~ 00:14
function solution(s) {
  const stack = [];

  for (const char of s) {
    if (stack.at(-1) === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length > 0 ? 0 : 1;
}

// 시간초과
// [...s].forEach((char) => {
//     if(stack.at(-1) === char) {
//         stack.pop();
//     } else {
//         stack.push(char);
//     }
// })
