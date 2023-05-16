const sol = (maps) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let ans = Infinity;
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array(n)
    .fill()
    .map(() => Array(m).fill(false));
  const queue = [[0, 0, 1]];
  visited[0][0] = true;
  while (queue.length) {
    const [x, y, s] = queue.shift();
    if (x === n - 1 && y === m - 1) {
      ans = Math.min(ans, s);
    }
    for (let i = 0; i < dx.length; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        maps[nx][ny] === 1 &&
        visited[nx][ny] === false
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, s + 1]);
      }
    }
  }
  return ans === Infinity ? -1 : ans;
};
