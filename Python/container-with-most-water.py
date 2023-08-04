class Solution:
    def maxArea(self, height: List[int]) -> int:
        res = 0
        l = 0
        r = len(height)-1

        while(l<r):
            val = (r-l) * min(height[l],height[r])

            res = max(val, res)

            if(height[l]<=height[r]):
                l = l+1
            else:
                r= r-1
        
        return res
