function getCombination(num, arr) {
	// 순서 상관 없는 조합을 구하는 함수
	if (num === 1) return arr.map((v) => [v]);

	const result = [];

	arr.forEach((v, idx, origin) => {
		const rest = origin.slice(idx + 1);
		const combinations = getCombination(num - 1, rest);
		const attached = combinations.map((a) => [v, ...a]);
		result.push(...attached);
	});

	return result;
}

function getUniqueness(arr, origin) {
	// 유일성을 체크
	const result = [];
	arr.forEach((value) => {
		let set = new Set(); // 집합
		origin.forEach((ori) => {
			set.add(value.map((v) => ori[v]).join(",")); // 각 조합의 키 값들을 ,으로 합치고 집합에 add
		});
		if (set.size === origin.length) result.push(value); // 만약에 집합과 기존 원소 row가 같다면 -> 중복되는 것이 없다면 결과에 push
	});
	return result;
}

function getMinimality(combinations) {
	let results = [];

	while (combinations.length) {
		results.push(combinations[0]); // 첫번째 원소는 무조건 최소이므로 일단 result에 푸쉬 reduce에서도 사용해야함
		combinations = combinations.reduce((acc, cur) => {
			let notMinimal = combinations[0].every((combination) => cur.includes(combination)); // combinations 원소에 포함되는지 체크
			if (!notMinimal) acc.push(cur); // 포함되지 않을 경우 최소성을 만족하므로 result에 push
			return acc;
		}, []);
	}

	return results;
}

function solution(relation) {
	const arr = Array.from(Array(relation[0].length), (_, idx) => idx);
	let combinations = [];

	for (let r = 1; r <= relation[0].length; r++) {
		// 1부터 튜플 수까지 조합 저장
		combinations.push(...getCombination(r, arr));
	}

	combinations = getUniqueness(combinations, relation); // 유일성 체크
	combinations = getMinimality(combinations); // 최소성 체크

	return combinations.length;
}
