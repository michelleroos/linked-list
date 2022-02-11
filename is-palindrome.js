/*
234. Palindrome Linked List Easy
Given the head of a singly linked list, return true if it is a palindrome.
*/

var isPalindrome = function (head) {
  const output = [];
  let node = head;
  while (node) {
    output.push(node.val);
    node = node.next;
  }
  return isPalindromeStr(output.join(''));
};

const isPalindromeStr = (str) => {
  return str.split('').reverse().join('') === str;
}

const head1 = [1,2,2,1];
console.log(isPalindrome(head1));
// Output: true


const head2 = [1,2];
console.log(isPalindrome(head2));
// Output: false
 