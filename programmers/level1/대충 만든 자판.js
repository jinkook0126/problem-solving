const sol = (keymap, targets) => {
  const pad = keymap.map((x) => x.split(""));
  const ans = [];
  let sum = 0;
  targets.forEach((s) => {
    const mp = s.split("");
    for (let i = 0; i < mp.length; i++) {
      let min = Number.MAX_SAFE_INTEGER;
      let chk = false;
      for (let j = 0; j < pad.length; j++) {
        const z = pad[j].indexOf(mp[i]);
        if (z !== -1) {
          chk = true;
          min = Math.min(min, z + 1);
        }
      }
      if (!chk) {
        sum = -1;
        break;
      }
      sum += min;
    }
    ans.push(sum);
    sum = 0;
  });
  return ans;
};
