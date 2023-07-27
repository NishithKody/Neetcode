class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        dict = {}
        dict2= {}

        if(len(s)!=len(t)):
            return False

        for i in s:
            if(dict.get(i)):
                dict[i] = dict[i]+1
            else:
                dict[i] = 1

        for i in t:
            if(dict2.get(i)):
                dict2[i] = dict2[i]+1
            else:
                dict2[i] = 1

        if(dict == dict2):
            return True
        else:
            return False
