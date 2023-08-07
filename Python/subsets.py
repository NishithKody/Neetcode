class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:

        global res

        res = []

        def util(i, cur):
            if(i>=len(nums)):
                res.append(cur.copy())
                return 
                
            cur.append(nums[i])
            util(i+1, cur)
            cur.pop()
            util(i+1,cur)
        
        util(0,[])
        
        return res
