/**
 * 나만 개 어렵게 풀었다.
 * 테스트 데이터의 길이를 보고 기존 배열과 반복문으로는 시간초과가 될 것 같아서
 * 배열 교환은 시도 하지도 않았다.
 * map을 2개 만들어서 순위가 변할 때 마다 서로 교차해주었는데
 * 다른사람의 꽤 괜찮은 풀이는
 * 나와 비슷하지만 paramter로 들어온 players를 이용하여
 * 순위가 변동되면 players의 순서를 바꿔주는 것이었다.
 *
 */
const sol = (players, callings) => {
  const res = [];
  const map1 = new Map();
  const map2 = new Map();
  players.forEach((x, i) => {
    map1.set(x, i);
    map2.set(i, x);
  });
  for (let i = 0; i < callings.length; i++) {
    const name = callings[i];
    const v1 = map1.get(name);
    const name2 = map2.get(v1 - 1);
    const v2 = map1.get(name2);

    map1.set(name, v2);
    map1.set(name2, v1);

    map2.set(v2, name);
    map2.set(v1, name2);
  }
  for (const [k, v] of map2) {
    res.push(v);
  }
  return res;
};
