class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []

        res = [0] * len(temperatures)

        i =0

        while(i<len(temperatures)):
            if(len(stack)==0):
                stack.append([i,temperatures[i]])
                i = i+1
            else:
                cur = temperatures[i]
                if(cur<=stack[ len(stack)-1 ][1] ):
                    stack.append([i, cur])
                    i = i+1
                else:
                    while(len(stack)!=0 and cur> stack[len(stack)-1][1]):
                        [pos, temp] = stack.pop()
                        # print('pos and temp',pos,temp)
                        # print('index',i)
                        res[pos] = i-pos
                    
                    stack.append([i, cur])
                    i=i+1
        
        return res
