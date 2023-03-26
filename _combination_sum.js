function combinationSum(candidates: number[], target: number): number[][] {

    let res = []

    let dfs = (i,cur,total)=>{

        if( total== target ){
            res.push(Array.from(cur))
            return
        }
        if(total>target || i>=candidates.length)
            return
        
        cur.push(candidates[i])
        dfs(i, cur, total+candidates[i])
        cur.pop()
        dfs(i+1, cur, total) 

    }

    dfs(0,[],0)

    return res

};
