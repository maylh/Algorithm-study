function solution(s) {
  const result = [];
  const seen = new Set();

  // 문자열에서 중괄호로 감싸진 튜플들을 추출
  const tuples = s
    .slice(2, -2)                 // 앞뒤 중괄호 제거
    .split("},{")                 // },{ 기준으로 나눔
    .map(str => str.split(",").map(Number));  // 숫자 배열로 변환

    
  tuples.sort((a, b) => a.length - b.length);

  for (const tuple of tuples) {
    for (const num of tuple) {
      if (!seen.has(num)) {
        seen.add(num);
        result.push(num);
      }
    }
  }

  return result;
}