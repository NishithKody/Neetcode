/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let adj = {}
    for(let i = 0; i<numCourses; i++)
        adj[i] = []
    
    for(let crs of prerequisites){
        let main = crs[0]
        let pre = crs[1]
        adj[main].push(pre)
    }

    let visit = new Set()
    let cycle = new Set()
    let res = []

    let dfs =(crs)=>{

        if(cycle.has(crs)){
            return false
        }

        if(visit.has(crs)){
            return true
        }

        cycle.add(crs)

        for(let pre of adj[crs]){
            if(!dfs(pre))
                return false
        }
        cycle.delete(crs)
        visit.add(crs)

        res.push(crs)

        return true

    }

    for(let i = 0; i<numCourses; i++){
        if(dfs(i)==false){
            return []
        }
    }

    return res
    
};
