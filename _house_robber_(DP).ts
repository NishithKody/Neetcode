function rob(nums: number[]): number {

    let dp = new Array(nums.length+2)
    dp[nums.length+0] = 0
    dp[nums.length+1] = 0

    for(let i = nums.length-1; i>=0; i--){
        let maxIfSkipped = dp[i+1]
        let maxIfSelected = nums[i] + dp[i+2]
        dp[i] = Math.max(maxIfSkipped, maxIfSelected)
    }

    return dp[0]
};



ref - https://leetcode.com/problems/house-robber/solutions/1491888/javascript-from-noob-to-pro/
