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

const [N, K, P, X] = input()
	.trim()
	.split(" ")
	.map((v) => parseInt(v));

// LED 점멸등 가정
const numbers = {
	0: "1111110",
	1: "0110000",
	2: "1101101",
	3: "1111001",
	4: "0110011",
	5: "1011011",
	6: "1011111",
	7: "1110000",
	8: "1111111",
	9: "1111011",
};

// 현재 층과 가능한 모든 층을 비교해서 만약에 반전인 LED 수가 P개 이하라면 1 아니면 0 리턴
function compare(a, b) {
	let count = 0;
	for (let k = 0; k < a.length; k++) {
		const first = numbers[a[k]];
		const second = numbers[b[k]];

		for (let j = 0; j < 7; j++) {
			if (first[j] !== second[j]) count++;
		}
	}
	return count <= P ? 1 : 0;
}

let answer = 0;

const curr = "0".repeat(K - String(X).length) + String(X); // 자리수 고려한 현재 층

for (let i = 1; i <= N; i++) {
	const floor = "0".repeat(K - String(i).length) + String(i); // 자리수 고려한 가능한 층수
	answer += compare(curr, floor);
}

// 자기자신 제외 -1
console.log(answer - 1);
