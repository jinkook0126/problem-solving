const sol = (name, yearning, photo) => {
  const res = [];
  const map = new Map();
  for (let i = 0; i < name.length; i++) {
    map.set(name[i], yearning[i]);
  }
  console.log(map);
  photo.forEach((x) => {
    let sum = 0;
    x.forEach((man) => {
      if (map.has(man)) sum += map.get(man);
    });
    res.push(sum);
  });
  return res;
};
