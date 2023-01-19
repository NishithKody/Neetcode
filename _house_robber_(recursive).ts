function rob(nums: number[]): number {

    let util =(n)=>{
        
        if(n>=nums.length)
            return 0

        return Math.max( nums[n]+ util(n+2), util(n+1))

    }

    return util(0)

};
