/*
create linked list

Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  const dummy = new Node(null);
  let tail = dummy;
  for (let value of values) {
    tail.next = new Node(value);
    tail = tail.next;
  };
  return dummy.next;
};

// test_00:
console.log(createLinkedList(["h", "e", "y"]));
// h -> e -> y

// test_01:
console.log(createLinkedList([1, 7, 1, 8]));
// 1 -> 7 -> 1 -> 8

// test_02:
console.log(createLinkedList(["a"]));
// a

// test_03:
console.log(createLinkedList([]));
// null
