class Solution:
    def isValid(self, s: str) -> bool:

        stack = []
        for i in s:
            if(i == '(' or i == '[' or i == '{'):
                stack.append(i)
            else:
                if(len(stack)==0):
                    return False
                ele = stack.pop()
                if(ele == '(' and i !=')'):
                    return False
                elif(ele == '[' and i !=']'):
                    return False
                elif(ele == '{' and i !='}'):
                    return False

        if(len(stack)!=0):
            return False
        return True
