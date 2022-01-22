/*
merge lists
Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain increasing sorted numbers.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLists = (head1, head2) => {
  const dummy = new Node(null);
  let tail = dummy;
  let node1 = head1;
  let node2 = head2;
  while (node1 && node2) {
    if (node1.val < node2.val) {
      tail.next = node1;
      node1 = node1.next;
    } else {
      tail.next = node2;
      node2 = node2.next;
    };
    tail = tail.next;
  };
  if (node1) tail.next = node1;
  if (node2) tail.next = node2;
  return dummy.next;
};

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);

const g = new Node(1);
const h = new Node(8);
const i = new Node(9);
const j = new Node(10);

const k = new Node(30);

const l = new Node(15);
const m = new Node(67);

// test_00:
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25
console.log('00');
console.log(mergeLists(a, q));
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 

// test_01:
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28
g.next = h;
h.next = i;
i.next = j;
// 1 -> 8 -> 9 -> 10
console.log('01');
console.log(mergeLists(a, g));
// 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28 

// test_02:
l.next = m;
// 15 -> 67
console.log('02');
console.log(mergeLists(k, l));
// 15 -> 30 -> 67