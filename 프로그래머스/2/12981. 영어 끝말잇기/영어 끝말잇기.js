function solution(n, words) {
  const used = new Set();  // 사용된 단어 저장
  used.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const curr = words[i];

    const player = (i % n) + 1;
    const round = Math.floor(i / n) + 1;

    // 끝말잇기 규칙 위반 or 중복 단어 사용
    if (curr[0] !== prev[prev.length - 1] || used.has(curr)) {
      return [player, round];
    }

    used.add(curr);
  }

  return [0, 0]; 
}