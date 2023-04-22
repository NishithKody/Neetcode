/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let res = new ListNode(0)
    let head = res
    let carry = 0

    while(l1 || l2){
        let val1=0
        let val2=0

        if(l1)
            val1 = l1.val
        
        if(l2)
            val2 = l2.val
        
        let sum = val1 + val2 + carry

        carry = Math.floor(sum/10)
        head.next = new ListNode(sum%10)

        if(l1)
            l1 = l1.next
        if(l2)
            l2 = l2.next
        
        head= head.next
    }

    if(carry>0){
        head.next = new ListNode(carry)
    }

    return res.next
    
};
