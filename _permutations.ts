function permute(nums: number[]): number[][] {

    let res =[]
    let used = []

    let backtrack = (used,cur)=>{
        
        if(cur.length == nums.length){
            res.push(Array.from(cur))
            // console.log('res',res)
            return
        }

        for(let j=0; j<nums.length; j++){
            
            if(used.includes(nums[j])){
                continue
            }

            used.push(nums[j])
            cur.push(nums[j])
            backtrack(used,cur)
            used.pop()
            cur.pop()
        }
    }

    backtrack([],[])
    return res

};
