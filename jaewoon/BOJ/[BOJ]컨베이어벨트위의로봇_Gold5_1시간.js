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

const [N, K] = input()
	.split(" ")
	.map((v) => Number(v));

const belt = input()
	.split(" ")
	.map((v) => Number(v));

let count = 0;
const visited = Array.from(Array(N * 2), () => false);
const robots = [];
let step = 0;
let robotStart = 0;

while (count < K) {
	// 벨트 회전
	const tempB = belt.pop();
	belt.unshift(tempB);
	const tempV = visited.pop();
	visited.unshift(tempV);

	// 이동할 로봇이 있을 경우
	if (robots.length) {
		for (let i = robotStart; i < robots.length; i++) {
			robots[i] = robots[i] + 1;

			if (robots[i] === N - 1) {
				visited[N - 1] = false;
				robotStart++;
				continue;
			}

			const next = robots[i] + 1;
			// 로봇이 다음 이동할 벨트가 0이 아니고 아직 로봇이 없을 경우 이동
			if (belt[next] !== 0 && !visited[next]) {
				visited[robots[i]] = false;
				robots[i] = next;
				visited[next] = true;
				belt[next] -= 1;
				if (belt[robots[i]] === 0) count++;
				if (robots[i] === N - 1) {
					visited[N - 1] = false;
					robotStart++;
				}
			}
		}
	}
	if (belt[0] > 0 && !visited[0]) {
		belt[0] -= 1;
		robots.push(0);
		visited[0] = true;
		if (belt[0] === 0) count++;
	}
	step++;
}

console.log(step);
