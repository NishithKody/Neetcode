/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {

    let map = new Map()

    let util= (index, total)=>{

        let key = index+'|'+total

        if(index == nums.length ){
            if(total == target)
                return 1
            else
                return 0
        }

        if(map.has(key))
            return map.get(key)

        let positive = util(index+1, total +nums[index])
        let negative = util(index+1, total -nums[index])

        let sum = positive + negative
        map.set(key,sum)

        return sum

    }

    return util(0,0)

    
};
