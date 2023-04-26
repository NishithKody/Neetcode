/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    
    nums.sort((a,b)=>{
        sa = a.toString()
        sb = b.toString()
        if(parseInt(sa+sb)>parseInt(sb+sa))
            return -1
        else
            return 1
    })
    if(nums[0] === 0) return '0'

    return nums.join('')
};
