const sol = (park, routes) => {
  const board = park.map((x) => x.split(""));
  const cmd = routes.map((x) => x.split(" "));
  const curr = [0, 0];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "S") {
        curr[0] = i;
        curr[1] = j;
        break;
      }
    }
  }
  for (let i = 0; i < cmd.length; i++) {
    const [direction, d] = cmd[i];
    const distance = Number(d);
    if (direction === "E") {
      const ny = curr[1] + distance;
      if (ny >= 0 && board[0].length > ny) {
        let ch = true;
        for (let i = curr[1]; i <= ny; i++) {
          if (board[curr[0]][i] === "X") {
            ch = false;
            break;
          }
        }
        if (ch) curr[1] = ny;
      }
    } else if (direction === "W") {
      const ny = curr[1] - distance;
      if (ny >= 0 && board.length > ny) {
        let ch = true;
        for (let i = curr[1]; i >= ny; i--) {
          if (board[curr[0]][i] === "X") {
            ch = false;
            break;
          }
        }
        if (ch) curr[1] = ny;
      }
    } else if (direction === "S") {
      const nx = curr[0] + distance;
      if (nx >= 0 && board[0].length > nx) {
        let ch = true;
        for (let i = curr[0]; i <= nx; i++) {
          if (board[i][curr[1]] === "X") {
            ch = false;
            break;
          }
        }
        if (ch) curr[0] = nx;
      }
    } else if (direction === "N") {
      const nx = curr[0] - distance;
      if (nx >= 0 && board[0].length > nx) {
        let ch = true;
        for (let i = curr[0]; i >= nx; i--) {
          if (board[i][curr[1]] === "X") {
            ch = false;
            break;
          }
        }
        if (ch) curr[0] = nx;
      }
    }
  }
  return curr;
};
