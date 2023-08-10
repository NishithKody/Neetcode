class Solution:
    def characterReplacement(self, s: str, k: int) -> int:

        res = 0

        map = {'A':0, 'B':0, 'C':0, 'D':0, 'E':0}

        l = 0
        r= 0

        while(r<len(s)):
            ele = s[r]
            if(not map.get(ele)):
                map[ele] = 0
            map[ele] = map[ele]+1

            max_val = max(map.values())
            if((r-l+1)-max_val>k):
                rem = s[l]
                map[rem] = map[rem]-1
                l = l+1
            
            if(r-l+1 > res):
                res = r-l+1


            r = r +1
        
        return res
