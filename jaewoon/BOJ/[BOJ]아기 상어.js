const fs = require("fs");
const stdin = (
	process.platform === "linux"
		? fs.readFileSync("/dev/stdin").toString()
		: fs.readFileSync("./input.txt").toString()
).split("\n");

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const N = Number(input().trim());
const space = [];

for (let n = 0; n < N; n++) {
	space.push(
		input()
			.trim()
			.split(" ")
			.map((v) => Number(v))
	);
}

const curr = [0, 0];

for (let r = 0; r < N; r++) {
	// 상어의 위치 찾기
	for (let c = 0; c < N; c++) {
		if (space[r][c] === 9) {
			space[r][c] = 0;
			curr[0] = r;
			curr[1] = c;
		}
	}
}

function bfs(curr, space, size) {
	// bfs 사용해서 먹이 위치 찾기
	const dir = [
		[-1, 0],
		[0, -1],
		[0, 1],
		[1, 0],
	];

	const visited = Array.from(Array(N), () => Array(N).fill(false));
	const temp = [];

	visited[curr[0]][curr[1]] = true;
	const queue = [[...curr, 0]];
	while (queue.length) {
		const [r, c, num] = queue.shift();

		if (space[r][c] < size && 0 < space[r][c]) {
			// 먹이를 찾으면 임시 배열에 저장하기
			temp.push([r, c, num]);
		}

		for (const d of dir) {
			const nR = r + d[0];
			const nC = c + d[1];

			if (nR >= 0 && nR < N && nC >= 0 && nC < N && !visited[nR][nC] && space[nR][nC] <= size) {
				visited[nR][nC] = true;
				queue.push([nR, nC, num + 1]);
			}
		}
	}
	if (temp.length) {
		// ! 중요 먹이가 있다면 최소 거리 먹이 찾기
		// 처음에는 그냥 bfs로 상 좌 우 하로 돌기만 했는데 테스트 케이스 실패 발생
		// 그래서 bfs로 모든 먹이 위치중에 가장 가까운 먹이 위치 반환
		temp.sort((x, y) => x[2] - y[2] || x[0] - y[0] || x[1] - y[1]);
		return temp[0];
	}
	return false;
}

let sharkSize = 2;
let move = 0;
let count = 0;

while (true) {
	const response = bfs(curr, space, sharkSize);
	if (response === false) break;
	move += response[2];
	curr[0] = response[0];
	curr[1] = response[1];
	space[response[0]][response[1]] = 0;
	count++;
	if (count === sharkSize) {
		sharkSize++;
		count = 0;
	}
}
console.log(move);
