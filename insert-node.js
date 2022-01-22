/*
insert node
Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// ITER 
// T: O(n) S: O(1)
const insertNode = (head, value, index) => {
  const newNode = new Node(value);
  if (index === 0) {
    newNode.next = head;
    return newNode;
  };
  let count = 0;
  let node = head;
  while (node) {
    if (count + 1 === index) {
      const next = node.next;
      node.next = newNode;
      newNode.next = next;
    };
    count++;
    node = node.next;
  };
  return head;
};


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

// test_00:
console.log(insertNode(a, 'x', 2));
// a -> b -> x -> c -> d

// test_01:
console.log(insertNode(a, 'v', 3));
// a -> b -> c -> v -> d

// test_02:
console.log(insertNode(a, 'm', 4));
// a -> b -> c -> d -> m

// test_03:
console.log(insertNode(a, 'z', 0));
// z -> a -> b 