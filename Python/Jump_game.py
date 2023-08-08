class Solution:
    def canJump(self, nums: List[int]) -> bool:

        res = [False] * (len(nums))
        res[len(nums)-1] = True

        pos = len(nums)-1
        
        for i in range(len(nums)-2,-1, -1):
            steps = nums[i]
            if(i+steps>=pos):
                res[i] = True
                pos = i


        return res[0]
