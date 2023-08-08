class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        left = []
        
        pre =1
        post = 1
        
        n=len(nums)
        right = [0]*(n)

        res = [0] *n
        

        for i in range(0,n):
            val = pre*nums[i]
            pre=val
            left.append(val)
        
        for i in range(n-1,-1,-1):
            val = post*nums[i]
            post = val
            right[i] = val
        
        # print('left',left)
        # print('right',right)

        res[0] = right[1]
        res[n-1] = left[n-2]

        for i in range(1, n-1):
            res[i] = right[i+1] * left[i-1]

        return res
