class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:

        global res
        res = []

        def util(i, cur, total):
            if(i>=len(candidates) or total>target):
                return 
            
            if(total == target):
                res.append(cur.copy())
                return
            
            cur.append(candidates[i])
            util(i, cur, total + candidates[i])
            cur.pop()
            util(i+1, cur, total)
        
        util(0,[],0)
        return res
