class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:

        map1= {}
        map2 = {}

        l = 0
        r = len(s1)-1

        s1 = sorted(s1)
        # print('s1 sort', s1)

        while(r<len(s2)):
            ele = s2[l:r+1]
            # print('ele',ele)
            ele =sorted(ele)
            if(ele == s1):
                return True
            
            l = l+1
            r = r+1
        
        return False
        





        
            
