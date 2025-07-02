function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false);
  let max = 0;

  function dfs(k, count) {
    max = Math.max(max, count);

    dungeons.forEach(([min, cost], i) => {
      if (!visited[i] && k >= min) {
        visited[i] = true;
        dfs(k - cost, count + 1);
        visited[i] = false;
      }
    });
  }

  dfs(k, 0);
  return max;
}
