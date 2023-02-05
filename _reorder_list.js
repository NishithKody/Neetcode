/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let stack = []
    if(!head){
        return;
    }

    let node = head;
    node  = node.next;
    while(node){
        stack.push(node)
        node = node.next
    }

    node = head;
    let len = stack.length
    for(let i =0; i<len; i++){

        if(Math.floor(i%2)!=0){
            node.next = stack.shift()
        } 
        else{
            node.next = stack.pop()
        }
        node=node.next;
        
    }
    node.next = null;

    return head;

    
};


//ref a bit dif -https://leetcode.com/problems/reorder-list/solutions/345596/simple-js-solution/
