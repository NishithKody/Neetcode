export class Solution {
  /**
   * @param n: An integer
   * @param edges: a list of undirected edges
   * @return: true if it's a valid tree, or false
   */
  validTree(n, edges) {
    // write your code here
    let adj = {}
    for(let i=0; i<n; i++)
        adj[i] = []

    for(let i of edges){
        adj[i[0]].push(i[1])
        adj[i[1]].push(i[0])
    }

    let visit = new Set();

    console.log(adj)

    let dfs = (node, prev)=>{
        if(visit.has(node))
            return false;
        
        visit.add(node)

        for(let j of adj[node]){
            if(j==prev)
                continue
            
            // return dfs(j,node)
            if (!dfs(j,node))
                return false
        }
        return true;

    }

    let res = dfs(0, -1)

    console.log('res',res)
    console.log('visit',visit)

    if(visit.size != n){
        return false
    }

    return res

  }
}
