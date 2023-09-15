class Solution:
    def uniquePaths(self, n: int, m: int) -> int:

        prev = [1] * m

        for i in range(n-2,-1,-1):
            temp = [0]*m
            temp[m-1] = 1

            for j in range(m-2,-1,-1):
                temp[j]= temp[j+1] + prev[j]
            
            prev = temp
        
        return prev[0]
        
