function solution(phone_book) {
  const set = new Set();
  phone_book.forEach((x) => {
    set.add(x);
  });
  for (let i = 0; i < phone_book.length; i++) {
    let cnt = 0;
    for (let j = 1; j <= phone_book[i].length; j++) {
      if (set.has(phone_book[i].substring(0, j))) {
        cnt += 1;
      }
    }
    if (cnt > 1) return false;
  }
  return true;
}
