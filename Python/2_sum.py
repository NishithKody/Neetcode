class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        res = []

        for i in range(0,len(nums)):
            val = target-nums[i]
            if(val in dict.keys()):
                res.append(dict.get(val))
                res.append(i)
            else:
                dict[nums[i]]= i
        
        return res
