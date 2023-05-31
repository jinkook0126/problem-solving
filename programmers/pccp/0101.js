function solution(input_string) {
  const map = new Map();
  const set = new Set();
  const arr = input_string.split("");
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    const c = arr[i];
    if (map.has(c)) {
      if (Math.abs(map.get(c) - i) >= 2) {
        map.set(c, i);
        set.add(c);
      } else {
        map.set(c, i);
      }
    } else {
      map.set(c, i);
    }
  }
  for (const v of set) {
    ans.push(v);
  }

  return ans.length === 0
    ? "N"
    : ans.sort((a, b) => a.localeCompare(b)).join("");
}
