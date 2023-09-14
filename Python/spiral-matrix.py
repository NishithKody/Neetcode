class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        res = []
        n = len(matrix)
        m = len(matrix[0])



        l =0
        r = m-1

        top = 0
        bot = n-1
        
        count =n*m

        while(count>0):
            for i in range(l,r+1):
                res.append(matrix[top][i])
                count = count -1
            
            top = top + 1
            # print('res step 1 ',res)
            

            for i in range(top,bot+1):
                res.append(matrix[i][r])
                count = count -1
            
            # print('res step 2 ',res)
            
            r=r -1

            if(count<=0):
                break
            
            for i in range(r, l-1, -1):
                res.append(matrix[bot][i])
                count = count-1
            
            bot = bot-1
            # print('res step 3 ',res)

            for i in range(bot,top-1,-1):
                res.append(matrix[i][l])
                count = count -1
            
            l = l +1
            # print('res step 4 ',res)
        
        return res
