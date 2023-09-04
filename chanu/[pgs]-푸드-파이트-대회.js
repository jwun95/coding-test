// 22:23 ~ 22:31
function solution(food) {
  const table = ["0"];

  for (let i = food.length - 1; i > 0; i--) {
    let count = 0;
    const foodCount = food[i];

    if (foodCount % 2 !== 0) {
      count = Math.floor(foodCount / 2);
    } else {
      count = foodCount / 2;
    }

    for (let j = 0; j < count; j++) {
      table.unshift(String(i));
      table.push(String(i));
    }
  }

  return table.join("");
}
