/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let node = new ListNode(null)
    let cur = node
    while(l1 && l2){
        if(l1.val>l2.val){
            cur.next = l2
            l2=l2.next;
        }
        else {
            cur.next=l1
            l1=l1.next
        }

        cur = cur.next
        // console.log('step',node)
    }
    cur.next = l1||l2
    return node.next

};
