/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

    let heap = new MaxPriorityQueue();
    

    for(let i of stones){
        heap.enqueue(i)
    }

    while(heap.size() >=2 ){
        let a = heap.dequeue().element
        let b = heap.dequeue().element
        if(a>b){
            heap.enqueue(a-b)
        }
        else if(b>a){
            head.enqueue(b-a)
        }
        // console.log(heap)
    }
    if(heap.size()==0)
        return 0
    return heap.dequeue().element
    
};
