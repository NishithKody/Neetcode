/**
 * @param {number[][]} points
 * @return {number}
 */

let getDist = (p1,p2)=>{
    return Math.abs(p1[0]-p2[0]) + Math.abs(p1[1]-p2[1])
}

var minCostConnectPoints = function(points) {

    let res = 0
    let heap = new MinPriorityQueue({ priority: (item)=>item[0]});
    let n = points.length
    let visit = new Set()

    //Add first element to heap
    visit.add(points[0][0]+'|'+points[0][1])

    //Add neighbors of the first element to the heap

    for(let i=1; i<n; i++){
        let dist = getDist(points[0],points[i])
        heap.enqueue([dist,points[i]])
    }

    console.log('heap',heap)

    while(visit.length < n){
        let [cost,point] = heap.dequeue().element

        if(visit.has(point[0]+"|"+point[1]))
            continue
        visit.add(point[0]+"|"+point[1])

        res = res+cost

        for(let i=0; i<n; i++){
            let dist = getDist(point,points[i])

            if(visit.has(visit.add(points[i][0]+"|"+points[i][1]))){
                continue
            }

            if(dist===0)
                continue
        }
    }

    return res

};

//ref - https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/2060656/javascript-neetcode-solution-prim-s-algorithm-mst/
