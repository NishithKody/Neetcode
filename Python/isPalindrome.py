class Solution:
    def isPalindrome(self, s: str) -> bool:
        l=0
        r=len(s)-1
        s= s.lower()
        # print(s)
        while(l<=r):
            val1 = s[l]
            val2 = s[r]

            if not val1.isalpha() and not val1.isdigit():
                l=l+1
            elif not val2.isalpha() and not val2.isdigit():
                r=r-1
            elif val1!=val2:
                return False
            else:
                l = l+1
                r=r-1
        
        return True
