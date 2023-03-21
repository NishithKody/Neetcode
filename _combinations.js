function combine(n: number, k: number): number[][] {
    let res = []

    let backtrack = (i, cur)=>{
        if(cur.length==k){
            res.push(Array.from(cur))
            return
        }

        for(let j = i; j<=n; j++){
            cur.push(j)
            backtrack(j+1,cur)
            cur.pop()
        }
    }

    backtrack(1,[])

    return res

};
