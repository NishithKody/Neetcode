class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        n = len(nums)
        nums.sort()
        
        #-4 -1 -1
        # i
        #   l
        #                  
        for i in range(0,len(nums)-1):
            l = i+1
            r = n-1
            while(l<r):
                if(i==l):
                    l = l+1
                    continue
                if(i==r):
                    r=r-1
                    continue
                
                if(nums[i]+nums[l]+nums[r]==0):
                    temp = []
                    temp.append(nums[i])
                    temp.append(nums[l])
                    temp.append(nums[r])
                    if(temp not in res):
                        res.append(temp)
                    
                    l= l+1
                elif(nums[i]+nums[l]+nums[r]<0):
                    l = l+1
                elif(nums[i]+nums[l]+nums[r]>0):
                    r =r-1
    
        return res
