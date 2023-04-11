/*
https://www.acmicpc.net/problem/1920

문제
N장의 카드가 있다. 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있으며, 1번 카드가 제일 위에, N번 카드가 제일 아래인 상태로 순서대로 카드가 놓여 있다.
이제 다음과 같은 동작을 카드가 한 장 남을 때까지 반복하게 된다. 
우선, 제일 위에 있는 카드를 바닥에 버린다. 
그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.
예를 들어 N=4인 경우를 생각해 보자. 
카드는 제일 위에서부터 1234 의 순서로 놓여있다. 
1을 버리면 234가 남는다. 
여기서 2를 제일 아래로 옮기면 342가 된다. 
3을 버리면 42가 되고,
 4를 밑으로 옮기면 24가 된다. 
 마지막으로 2를 버리고 나면, 남는 카드는 4가 된다.
N이 주어졌을 때, 제일 마지막에 남게 되는 카드를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수 N(1 ≤ N ≤ 500,000)이 주어진다.

출력
첫째 줄에 남게 되는 카드의 번호를 출력한다.

비고
일반 배열을 통해 push, pop, shift로 구현하게 되면 시간초과 난다.
혹시 해당 구현에 규칙이 있는지 찾아보았지만 찾지 못해 인터넷 검색해보았다.
js 에서 배열은 변경될 때마다 indexing을 다시 하므로 시간 복잡도가 엄청 크다고 하여
linked list를 통해 해결해야 한다고 한다.
다른 언어라면 위 linked list가 있지만 js에서는 직접 구현해야 한다고 한다.
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// LinkedList 클래스 설정
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;

    return newNode;
  }

  getHead() {
    // 첫 노드(head) 가져오기
    return this.head.val;
  }

  removeHead() {
    // 첫 노드(head)를 연결리스트에서 지우기
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  getLength() {
    // 연결리스트의 길이 알기
    return this.length;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  const N = input.shift();
  const cards = new LinkedList();
  for (let i = 1; i <= N; i++) {
    cards.push(i);
  }
  while (cards.getLength() !== 1) {
    cards.removeHead();
    cards.push(cards.getHead());
    cards.removeHead();
  }
  console.log(cards.getHead());
  process.exit();
});
