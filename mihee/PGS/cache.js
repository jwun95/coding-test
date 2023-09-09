function solution(cacheSize, cities) {
  if (cacheSize === 0 || cacheSize >= cities.length) return cities.length * 5;

  var answer = 0;
  var cities = cities.map((a) => a.toUpperCase()); // 입력 도시 모두 대문자로 변환
  var cache = []; // 캐시에 저장된 도시

  var startIdx = 0;

  // 캐시 초기화
  for (var i = 0; i < cities.length; i++) {
    if (!cache.includes(cities[i])) {
      answer += 5;
      cache.push(cities[i]);
    } else {
      answer += 1;
      var idx = cache.findIndex((c) => c === cities[i]);
      cache.splice(idx, 1);
      cache.push(cities[i]);
    }
    if (cache.length === cacheSize) {
      startIdx = i + 1;
      break;
    }
  }

  // 캐시 초기화 후 입력된 도시 처리
  for (var i = startIdx; i < cities.length; i++) {
    if (cache.includes(cities[i])) {
      answer += 1;
      var idx = cache.findIndex((c) => c === cities[i]);
      cache.splice(idx, 1); // 가장 최근에 사용 -> 캐시 배열 내 위치 갱신을 위해 제거
    } else {
      answer += 5;
      cache.splice(0, 1); // 가장 오래된 것 제거
    }
    cache.push(cities[i]); // 캐시 교체
  }
  return answer;
}