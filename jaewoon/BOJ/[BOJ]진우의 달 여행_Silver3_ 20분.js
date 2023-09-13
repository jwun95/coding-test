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

const [N, M] = input()
	.trim()
	.split(" ")
	.map((v) => Number(v));

const routes = [];
const directions = [
	[1, 0],
	[1, -1],
	[1, 1],
];

for (let n = 0; n < N; n++) {
	routes.push(
		input()
			.trim()
			.split(" ")
			.map((v) => Number(v))
	);
}

const answer = [];

for (let i = 0; i < M; i++) {
	dfs([0, i], 0, -1);
}

function dfs(location, sum, curr) {
	const [x, y] = location;
	const value = routes[x][y];
	if (x === N - 1) return answer.push(sum + value);

	for (let d = 0; d < directions.length; d++) {
		const nextX = x + directions[d][0];
		const nextY = y + directions[d][1];

		if (nextX < N && nextY >= 0 && nextY < M && d !== curr) {
			dfs([nextX, nextY], sum + value, d);
		}
	}
}

console.log(Math.min(...answer));
