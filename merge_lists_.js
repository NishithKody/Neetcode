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
    let newNode = new ListNode()

    if(lists.length==0){
        return newNode.next
    }
    let heap = new MinPriorityQueue({priority:ele=>ele.val})

    for(let list of lists){
        if(!list)
            continue
        heap.enqueue(list)
    }
    let cur = newNode

    while(heap.size()>0){
        let ele = heap.dequeue().element

        newNode.next = ele
        newNode = newNode.next
        ele = ele.next
        if(ele){
            heap.enqueue(ele)
        }
    }

    return cur.next
};
