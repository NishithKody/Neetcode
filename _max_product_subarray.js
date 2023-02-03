/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let curMax = nums[0]
    let curMin = nums[0]
    let res = nums[0];

    for(let i=1; i<nums.length; i++){

        let temp = curMax // we store curMax in temp, because curMax will be 
        //updated in the next step
        curMax = Math.max(nums[i]*curMax, nums[i]*curMin, nums[i]);
        curMin = Math.min(nums[i]*temp, nums[i]*curMin, nums[i]);

        res = Math.max(curMax, curMin, res)
        // console.log('max',curMax)
        // console.log('min',curMin)
        // console.log('res',res)

    }

    return res;
    
};
