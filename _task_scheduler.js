/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let heap = new MaxPriorityQueue()
    let queue = []
    let map = new Map()
    let time = 0

    for(let i of tasks){
        map.set(i, map.get(i)+1 || 1)
    }

    let values = [...map.values()]

    for(let i of values){
        heap.enqueue(i)
    }

    while(heap.size()>0 || queue.length>0){
        time++;

        if(heap.size()>0){
            let ele = heap.dequeue().element
            ele--;
            if(ele!=0)
                queue.push([ele, time+n])
        }

        if(queue.length>0 && queue[0][1]==time){
            let ele = queue.shift()
            heap.enqueue(ele[0])
        }
    }

    return time 


};
