/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

let distance = (p1, p2)=>{
    return Math.pow(p1,2) + Math.pow(p2,2)
}

var kClosest = function(points, k) {
    
    let heap =new MaxPriorityQueue({ priority: (ele) => distance(ele[0],ele[1]) });

    for(let p of points){
        let val = distance(p[0],p[1])
       
        if(heap.size()<k){
            heap.enqueue(p)
        }
        else{
            let ele = heap.dequeue().element
            let dist = distance(ele[0],ele[1])

            if(val<dist){
                heap.enqueue(p)
            }
            else{
                heap.enqueue(ele)
            }
        }
    }

    let res = []
    while(heap.size()!=0){
        let ele = heap.dequeue().element
        res.push(ele)
    }

    return res

};
