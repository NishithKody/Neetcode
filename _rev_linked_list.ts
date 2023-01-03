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

function reverseList(head: ListNode | null): ListNode | null {
    let cur = head;
    let nex = null;
    let prev = null;

    //a->b->c->d
    //
    while(cur!=null){
        nex=cur.next;
        cur.next = prev;
        prev = cur;
        cur=nex;
    }


    return prev;

};
