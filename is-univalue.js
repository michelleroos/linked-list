/*
is univalue list

Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const isUnivalueList = (head) => {
  let node = head;
  while (node) {
    if (node.val !== head.val) return false;
    node = node.next;
  };
  return true;
};

// test_00:
let a = new Node(7);
let b = new Node(7);
let c = new Node(7);
a.next = b;
b.next = c;
// 7 -> 7 -> 7
console.log(isUnivalueList(a)); 
// true

// test_01:
c = new Node(4);
a.next = b;
b.next = c;
// 7 -> 7 -> 4
console.log(isUnivalueList(a)); 
// false

// test_02:
let u = new Node(2);
let v = new Node(2);
let w = new Node(2);
let x = new Node(2);
let y = new Node(2);
u.next = v;
v.next = w;
w.next = x;
x.next = y;
// 2 -> 2 -> 2 -> 2 -> 2
console.log(isUnivalueList(u)); 
// true

// test_03:
w = new Node(3);
x = new Node(3);
u.next = v;
v.next = w;
w.next = x;
x.next = y;
// 2 -> 2 -> 3 -> 3 -> 2
console.log(isUnivalueList(u)); 
// false

// test_04:
let z = new Node('z');
// z
console.log(isUnivalueList(z)); 
// true