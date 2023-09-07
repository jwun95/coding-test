function solution(r1, r2) {
  var answer = 0;

  for (let x = 1; x <= r2; x++) {
    // x좌표 1부터 r2까지 반복
    const maxX = Math.floor(Math.sqrt(r2 ** 2 - x ** 2)); // x 좌표마다 최대 점의 갯수 저장
    const minY = x < r1 ? Math.ceil(Math.sqrt(r1 ** 2 - x ** 2)) : 0; // x 좌표마다 최소 점의 갯수 저장. x가 r1보다 크면 최소 갯수가 존재 하지 않음.
    answer += maxX - minY + 1; // 최대에서 최소를 뺀 다음 + 1 -> 갯수이기 때문
  }

  return answer * 4; // 4분면이므로 *4
}
