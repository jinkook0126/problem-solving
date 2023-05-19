function solution(lines) {
  const arr = Array(401).fill(0);
  lines.forEach((x) => {
    const [start, end] = x;
    for (let i = start; i < end; i++) {
      arr[i + 100] += 1;
    }
  });

  return arr.filter((x) => x >= 2).length;
}
