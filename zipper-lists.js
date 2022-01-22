/*
zipper lists
Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// ITER
// T: O(min(m, n)) S: O(1)
const zipperLists = (head1, head2) => {
  let head = head1;
  let tail = head;
  let node1 = head1.next;
  let node2 = head2;
  let count = 0;
  while (node1 && node2) {
    if (count % 2 === 0) {
      tail.next = node2;
      node2 = node2.next;
    } else {
      tail.next = node1;
      node1 = node1.next;
    };
    count++;
    tail = tail.next;
  };
  if (node1) tail.next = node1;
  if (node2) tail.next = node2;
  return head;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");

const s = new Node("s");
const t = new Node("t");

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);

const w = new Node("w");

// test_00:
a.next = b;
b.next = c;
// a -> b -> c
x.next = y;
y.next = z;
// x -> y -> z

console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z

// test_01:
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f
x.next = y;
y.next = z;
// x -> y -> z

console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z -> d -> e -> f

// test_02:
s.next = t;
// s -> t
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

console.log(zipperLists(s, one));
// s -> 1 -> t -> 2 -> 3 -> 4

// test_03:
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

console.log(zipperLists(w, one));
// w -> 1 -> 2 -> 3

// test_04:
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

console.log(zipperLists(one, w));
// 1 -> w -> 2 -> 3