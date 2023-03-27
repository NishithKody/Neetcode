/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    let queue = new MinPriorityQueue({priority:item=>item.val})

    let head = new ListNode()
    let res = head

    for(let head of lists){
        if(head){
            queue.enqueue(head)
        }
    }

    while(!queue.isEmpty()){
        let {val,next} = queue.dequeue().element
        res.next = new ListNode(val)
        res=res.next

        if(next){
            queue.enqueue(next)
        }
    }

    return head.next
    
};
