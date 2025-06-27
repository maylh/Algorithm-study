function solution(topping) {
  const leftSet = new Set();
  const rightCount = new Map();
  let answer = 0;

  for (const t of topping) {
    rightCount.set(t, (rightCount.get(t) || 0) + 1);
  }

  for (const t of topping) {
    leftSet.add(t);
    rightCount.set(t, rightCount.get(t) - 1);

    if (rightCount.get(t) === 0) {
      rightCount.delete(t); // 유니크 종류 줄이기
    }

    if (leftSet.size === rightCount.size) {
      answer++;
    }
  }

  return answer;
}
