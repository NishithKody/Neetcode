class Solution:
    def longestPalindrome(self, s: str) -> str:

        res = ""
        n = len(s)

        for i in range(0,len(s)):
            l = i
            r = i+1

            while(l>=0 and r<n and s[l]==s[r]):
                
                if(r-l+1 > len(res)):
                    res = s[l:r+1]

                l = l-1
                r = r+1
            
            l = i
            r = i

            while(l>=0 and r<n and s[l]==s[r]):
                
                if(r-l+1 > len(res)):
                    res = s[l:r+1]

                l = l-1
                r = r+1
        
        return res
