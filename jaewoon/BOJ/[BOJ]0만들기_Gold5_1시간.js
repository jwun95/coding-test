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

const T = Number(input());
const order = ["+", "-", " "];
const reg = /[0-9]/;

function calculator(numberList, signalList) {
	let result = "";
	let origin = "";
	for (let num = 0; num < signalList.length; num++) {
		if (signalList[num] !== " ") result += numberList[num] + signalList[num];
		else result += numberList[num];
		origin += numberList[num] + signalList[num];
	}
	result += numberList[numberList.length - 1];
	origin += numberList[numberList.length - 1];

	let hap = 0;
	let state = "+";
	let curr = "";

	for (let r = 0; r < result.length; r++) {
		if (reg.test(result[r])) curr += result[r];
		else {
			if (state === "+") hap += Number(curr);
			else hap -= Number(curr);
			curr = "";
			state = result[r];
		}
	}

	if (state === "+") hap += Number(curr);
	else hap -= Number(curr);

	return hap === 0 ? origin : false;
}

const last = [];

for (let t = 0; t < T; t++) {
	const N = Number(input());
	const answer = [];
	let signals = [" ", "+", "-"];
	const numbers = Array.from(Array(N), (_, i) => i + 1);

	for (let n = 0; n < N - 2; n++) {
		const temp = [];
		signals.forEach((signal) => {
			for (const o of order) {
				temp.push(signal + o);
			}
		});
		signals = temp;
	}
	for (const s of signals) {
		const res = calculator(numbers, s);
		if (res) answer.push(res);
	}
	last.push(answer.sort().join("\n"));
}

console.log(last.join("\n\n"));
