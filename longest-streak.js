/*
longest streak

Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
  let longest = 0;
  let curr = 0;
  let node = head;
  let prev = null;
  while (node) {
    if (prev === node.val) {
      curr++;
    } else {
      curr = 1;
    };
    longest = Math.max(longest, curr);
    prev = node.val;
    node = node.next;
  }
  return longest;
};

let a = new Node(5);
let b = new Node(5);
let c = new Node(7);
let d = new Node(7);
let e = new Node(7);
let f = new Node(6);

// test_00:
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 5 -> 7 -> 7 -> 7 -> 6
console.log(longestStreak(a)); 
// 3

// test_01:
a = new Node(3);
b = new Node(3);
c = new Node(3);
d = new Node(3);
e = new Node(9);
f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 3 -> 3 -> 3 -> 3 -> 9 -> 9
console.log(longestStreak(a)); 
// 4

// test_02:
a = new Node(9);
b = new Node(9);
c = new Node(1);
d = new Node(9);
e = new Node(9);
f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 9 -> 9 -> 1 -> 9 -> 9 -> 9
console.log(longestStreak(a)); 
// 3

// test_03:
a = new Node(5);
b = new Node(5);

a.next = b;
// 5 -> 5
console.log(longestStreak(a)); 
// 2

// test_04:
a = new Node(4);
// 4
console.log(longestStreak(a)); 
// 1

// test_05:
console.log(longestStreak(null)); 
// 0