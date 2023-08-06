class Solution:
    def rob(self, nums: List[int]) -> int:

        def util(i):

            if(i<0):
                return 0
            
            return max(nums[i]+util(i-2), util(i-1))
        
        return util(len(nums)-1)
