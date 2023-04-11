/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {

    if(!node)
        return

    let newNode = new Node(node.val)
    let map = new Map()
    map.set(node,newNode)

    let queue = [node]

    while(queue.length>0){
        let cur = queue.shift()
        for(let n of cur.neighbors){
            if(!map.has(n)){
                let newNode = new Node(n.val)
                map.set(n, newNode)
                queue.push(n)
            }

            map.get(cur).neighbors.push(map.get(n))
        }
    }

    return newNode
};
