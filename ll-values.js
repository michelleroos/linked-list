/*
linked list values
Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// RECURSIVE
// T: O(n) - going through the LL
// S: O(n) - stack space
// const linkedListValues = (head) => {
//   const res = _linkedListValues(head);
//   return res.reverse();
// }

// const _linkedListValues = (head) => {
//   if (!head) return [];
//   const next = _linkedListValues(head.next);
//   next.push(head.val);
//   return next;
// };

// ITER
// T: O() 
// S: O()
const linkedListValues = (head) => {
  const values = [];
  let node = head;
  while (node) {
    values.push(node.val);
    node = node.next;
  };
  return values;
};

// test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d

console.log(linkedListValues(a)); 
// -> [ 'a', 'b', 'c', 'd' ]

// test_01:
const x = new Node("x");
const y = new Node("y");
x.next = y;
// x -> y

console.log(linkedListValues(x)); 
// -> [ 'x', 'y' ]

// test_02:
const q = new Node("q");
// q

console.log(linkedListValues(q)); 
// -> [ 'q' ]

// test_03:
console.log(linkedListValues(null)); 
// -> [ ]