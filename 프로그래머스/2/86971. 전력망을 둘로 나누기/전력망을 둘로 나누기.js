function solution(n, wires) {
  let min = n;
  let graph;
  const visited = Array(n + 1).fill(false);
    
  for (let i = 0; i < wires.length; i++) {
    graph = Array.from(Array(n + 1), () => Array());
    wires.forEach(([start, end], idx) => {
      
      if (idx !== i) {
        graph[start].push(end);
        graph[end].push(start);
      }
    });

    dfs(1);

    const count = visited.filter((i) => i).length;
    const another = n - count;
    const diff = Math.abs(count - another);

    if (min > diff) min = diff;
    visited.fill(false);
  }

  function dfs(v) {
    visited[v] = true;
    for (const i of graph[v]) {
      if (!visited[i]) dfs(i);
    }
  }

  return min;
}