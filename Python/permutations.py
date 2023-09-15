class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:

        res = []
        n = len(nums)

        def back(i,cur,visit):
            nonlocal n
            if i>=n:
                res.append(cur.copy())
                return
            
            for num in nums:
                if( num not in visit):
                    cur.append(num)
                    visit.append(num)

                    back(i+1,cur,visit)

                    cur.pop()
                    visit.pop()



        for i in nums:
            visit= []
            cur = []
            cur.append(i)
            visit.append(i)
            back(1,cur,visit)
        
        return res
        

            
