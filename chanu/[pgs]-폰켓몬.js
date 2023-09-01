// 20:46 ~ 20:53
function solution(nums) {
  const maxCount = nums.length / 2;
  const uniqueNums = new Set(nums);
  const uniquePocketCount = Array.from(uniqueNums).length;

  // 종류가 허락된 수보다 적을경우 허락된 수 만큼
  if (uniquePocketCount > maxCount) return maxCount;
  // 아니라면 종류만큼
  return uniquePocketCount;
}
