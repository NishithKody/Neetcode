class Solution:
    def findMin(self, nums: List[int]) -> int:
        low = 0
        high = len(nums)-1
        res = nums[0]

        while(low<=high):
            mid = (low+high)//2
            
            if(nums[mid]<res):
                res = nums[mid]
            
            if(nums[mid]>=nums[low]):
                if(nums[mid]>nums[high]):
                    low=mid+1
                if(nums[mid]<=nums[high]):
                    high = mid-1
            else:
                if(nums[mid]<=nums[high]):
                    high=mid-1
        
        return res
                
            
