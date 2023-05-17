/*
https://www.acmicpc.net/problem/7576
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      throw new Error("큐가 비었소");
    }
    const value = this.front.value;
    this.front = this.front.next;
    this.size--;
    if (this.size === 0) this.back = null;
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.size === 0) return null;
    return this.front.value;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(
    line
      .trim()
      .split(" ")
      .map((x) => +x)
  );
}).on("close", function () {
  const [N, M] = input.shift();
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = new Queue();

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (input[i][j] === 1) {
        queue.enqueue([i, j]);
      }
    }
  }
  while (!queue.isEmpty()) {
    const [px, py] = queue.dequeue();
    for (let i = 0; i < dx.length; i++) {
      const nx = px + dx[i];
      const ny = py + dy[i];
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && input[nx][ny] === 0) {
        input[nx][ny] = input[px][py] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
  let ans = Number.MIN_SAFE_INTEGER;
  let chk = false;
  for (let i = 0; i < M; i++) {
    if (input[i].indexOf(0) !== -1) {
      chk = true;
      break;
    }
    ans = Math.max(...input[i], ans);
  }
  console.log(chk ? -1 : ans === 1 ? 0 : ans - 1);
  process.exit();
});
