function subsets(nums: number[]): number[][] {

    let res =[]
    let subset = []

    let dfs =(i, subset) =>{
        if(i==nums.length){
            res.push(subset)
            return
        }

        dfs(i+1, [...subset, nums[i]])

        dfs(i+1, subset)
    }

    dfs(0,subset)

    return res


};
