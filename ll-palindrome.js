/*
linked palindrome
Write a function, linkedPalindrome, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list is a palindrome. A palindrome is a sequence that is the same both forwards and backwards.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedPalindrome = (head) => {
  const output = [];
  let node = head;
  while (node) {
    output.push(node.val);
    node = node.next;
  }
  return isPalindrome(output.join(''));
};

const isPalindrome = (str) => {
  return str.split('').reverse().join('') === str;
}

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(7);
const e = new Node(2);
const f = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 3 -> 2 -> 7 -> 7 -> 2 -> 3
console.log(linkedPalindrome(a)); // true