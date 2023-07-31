class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dict = {}
        res = []

        for s in strs:
            v = ''.join(sorted(s))

            if( v in dict.keys()):
                dict[v].append(s)
            else:
                dict[v] = []
                dict[v].append(s)
        
        for i in dict.values():
            res.append(i)
        
        return res
            
