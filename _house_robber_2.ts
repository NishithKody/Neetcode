function rob(nums: number[]): number {

    
    let n = nums.length 

    if(n==1)
        return nums[0]

    let util=(nums) =>{
        
        let dp = new Array(n+2).fill(0)
        let m = nums.length
        for(let i=m-1;i>=0;i--){
            let sel = nums[i] + dp[i+2]
            let notsel = dp[i+1]
            dp[i] = Math.max(sel,notsel)
        }
        // console.log(dp)
        return dp[0]
    }
    let a = util(nums.slice(0,n-1))
    let b = util(nums.slice(1,n))
    // console.log(a)
    // console.log(b)
    return Math.max(a,b)
};
