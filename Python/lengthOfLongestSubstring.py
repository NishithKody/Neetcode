class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        right =0
        res = 0
        se = set()

        while(right<len(s)):
            ele = s[right]
            if(ele in se):
                while(ele in se):
                    se.remove(s[left])
                    left = left +1
            se.add(ele)
            if(right-left+1>res):
                res = right-left+1
            
            right = right+1
        
        return res
