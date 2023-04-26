/**
 * 슬라이딩 윈도우
 */
const sol = (want, number, discount) => {
  let answer = 0;
  let lt = 0;
  let rt = 9;
  const list = new Map();
  for (let i = 0; i < want.length; i++) {
    list.set(want[i], number[i]);
  }
  while (rt < discount.length) {
    const map = new Map();
    let chk = true;
    for (let i = lt; i <= rt; i++) {
      map.set(discount[i], map.get(discount[i]) + 1 || 1);
    }
    for (const [c, v] of map) {
      if (map.get(c) !== list.get(c)) {
        chk = false;
      }
    }
    if (chk) {
      answer += 1;
    }
    lt++;
    rt++;
  }
  console.log(answer);
  return answer;
};
