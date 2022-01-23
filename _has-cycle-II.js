/*
142. Linked List Cycle II - Medium

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:


Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:


Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
 

Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 

Follow up: Can you solve it using O(1) (i.e. constant) memory?
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

const createLinkedList = (values, i = 0) => {
  if (i === values.length) return null;
  const head = new Node(values[i]);
  head.next = createLinkedList(values, i + 1);
  return head;
};

const createCycle = (head, idx) => {
  let node = head;
  let innerNode = head;
  while (node) {
    let count = 0;
    if (!node.next) {
      if (idx === 0) {
        node.next = head;
        return head;
      };
      while (innerNode) {
        if (count === idx) { // is this off-by-one?
          node.next = innerNode;
        };
        innerNode = innerNode.next;
        count++;
      };
    };
    node = node.next;
  };
  return head;
};

var getIntersection = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return fast;
    };
  };
  return null;
};

var detectCycle = function (head) {
  if (!head) return null;
  let intersect = getIntersection(head);
  if (!intersect) return null;
  let pointer1 = head;
  let pointer2 = intersect;
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  };
  return pointer1;
};

const headWOCycle = createLinkedList([3, 2, 0, -4]);
const headWCycle = createCycle(headWOCycle, 1);

console.log(detectCycle(headWCycle));