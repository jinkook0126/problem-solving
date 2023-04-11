# 설명

연결리스트 (Linked List) 의 기본적인 개념은 배열의 요소들에 인덱스 번호를 따로 붙이지 않고, 각 노드(연결리스트에서는 데이터를 노드(Node)라고 부름)들을 포인터로 연결하는 자료구조이다.

<br>

<ul>
    <li>처음 노드를 가르키는 Head</li>
    <li>마지막 노드를 가르키는 Tail</li>
    <li>List의 총 길이를 가르키는 Length</li>
    <li>각 노드를 연결하는 포인터 Next</li>
</ul>

<br>
<br>

# 구현

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

        getHead() { // 첫 노드(head) 가져오기
            return this.head.val;
        }

        removeHead() { // 첫 노드(head)를 연결리스트에서 지우기
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
        }

        getLength() { // 연결리스트의 길이 알기
            return this.length;
        }
    }
